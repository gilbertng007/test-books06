import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Howl } from 'howler';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const TICK_SPEED = 500;

const TETROMINOS = [
    { shape: [[1, 1, 1, 1]], color: 'from-red-500 to-pink-500' },
    { shape: [[1, 1], [1, 1]], color: 'from-yellow-500 to-orange-500' },
    { shape: [[0, 1, 1], [1, 1, 0]], color: 'from-green-500 to-emerald-500' },
    { shape: [[1, 1, 0], [0, 1, 1]], color: 'from-blue-500 to-indigo-500' },
    { shape: [[1, 1, 1], [0, 1, 0]], color: 'from-purple-500 to-pink-500' },
    { shape: [[1, 1, 1], [1, 0, 0]], color: 'from-teal-500 to-cyan-500' },
    { shape: [[1, 1, 1], [0, 0, 1]], color: 'from-amber-500 to-yellow-500' },
];

const createEmptyBoard = () => Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));

const Game = () => {
    const [board, setBoard] = useState(createEmptyBoard());
    const [currentPiece, setCurrentPiece] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const router = useRouter();

    const [sounds] = useState({
        move: new Howl({ src: ['/sounds/move.mp3'] }),
        rotate: new Howl({ src: ['/sounds/rotate.mp3'] }),
        drop: new Howl({ src: ['/sounds/drop.mp3'] }),
        clear: new Howl({ src: ['/sounds/clear.mp3'] }),
        gameOver: new Howl({ src: ['/sounds/gameover.mp3'] }),
    });

    const spawnNewPiece = useCallback(() => {
        const newPiece = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
        const pieceWidth = newPiece.shape[0].length;
        const startX = Math.floor((BOARD_WIDTH - pieceWidth) / 2);
        setCurrentPiece({
            shape: newPiece.shape,
            color: newPiece.color,
            x: startX,
            y: 0,
        });
    }, []);

    const isCollision = useCallback((piece, boardToCheck, offsetX = 0, offsetY = 0) => {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const newX = piece.x + x + offsetX;
                    const newY = piece.y + y + offsetY;
                    if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (boardToCheck[newY] && boardToCheck[newY][newX])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }, []);

    const mergePieceToBoard = useCallback((piece, boardToUpdate) => {
        const newBoard = boardToUpdate.map(row => [...row]);
        piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    newBoard[piece.y + y][piece.x + x] = piece.color;
                }
            });
        });
        return newBoard;
    }, []);

    const movePiece = useCallback((offsetX, offsetY) => {
        if (!currentPiece || gameOver) return;
        if (!isCollision(currentPiece, board, offsetX, offsetY)) {
            setCurrentPiece(prev => ({ ...prev, x: prev.x + offsetX, y: prev.y + offsetY }));
            sounds.move.play();
        } else if (offsetY > 0) {
            const newBoard = mergePieceToBoard(currentPiece, board);
            setBoard(newBoard);
            const clearedRows = newBoard.filter(row => row.every(cell => cell !== 0)).length;
            if (clearedRows > 0) {
                setScore(prev => prev + clearedRows * 100);
                sounds.clear.play();
            } else {
                sounds.drop.play();
            }
            setBoard(prev => [
                ...Array(clearedRows).fill().map(() => Array(BOARD_WIDTH).fill(0)),
                ...prev.filter(row => !row.every(cell => cell !== 0))
            ]);
            spawnNewPiece();
        }
    }, [currentPiece, board, gameOver, isCollision, mergePieceToBoard, spawnNewPiece, sounds]);

    const rotatePiece = useCallback(() => {
        if (!currentPiece || gameOver) return;
        const rotated = {
            ...currentPiece,
            shape: currentPiece.shape[0].map((_, index) =>
                currentPiece.shape.map(row => row[index]).reverse()
            )
        };
        if (!isCollision(rotated, board)) {
            setCurrentPiece(rotated);
            sounds.rotate.play();
        }
    }, [currentPiece, board, gameOver, isCollision, sounds]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    movePiece(-1, 0);
                    break;
                case 'ArrowRight':
                    movePiece(1, 0);
                    break;
                case 'ArrowDown':
                    movePiece(0, 1);
                    break;
                case 'ArrowUp':
                    rotatePiece();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [movePiece, rotatePiece]);

    useEffect(() => {
        if (!currentPiece && !gameOver) {
            spawnNewPiece();
        }
    }, [currentPiece, gameOver, spawnNewPiece]);

    useEffect(() => {
        const gameLoop = setInterval(() => {
            movePiece(0, 1);
        }, TICK_SPEED);

        if (gameOver) {
            clearInterval(gameLoop);
        }

        return () => {
            clearInterval(gameLoop);
        };
    }, [movePiece, gameOver]);

    useEffect(() => {
        if (currentPiece && isCollision(currentPiece, board, 0, 0)) {
            setGameOver(true);
            sounds.gameOver.play();
        }
    }, [currentPiece, board, isCollision, sounds]);

    const restartGame = () => {
        setBoard(createEmptyBoard());
        setCurrentPiece(null);
        setGameOver(false);
        setScore(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">俄羅斯方塊</h1>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-10 gap-1 mb-4">
                    {board.map((row, y) =>
                        row.map((cell, x) => (
                            <div
                                key={`${y}-${x}`}
                                className={`w-6 h-6 border border-gray-200 ${cell ? `bg-gradient-to-br ${cell}` :
                                        currentPiece && currentPiece.shape[y - currentPiece.y] && currentPiece.shape[y - currentPiece.y][x - currentPiece.x]
                                            ? `bg-gradient-to-br ${currentPiece.color}`
                                            : 'bg-gray-100'
                                    }`}
                            />
                        ))
                    )}
                </div>
                <div className="text-center">
                    <p className="text-xl font-bold mb-2">分數: {score}</p>
                    {gameOver && (
                        <div>
                            <p className="text-red-500 font-bold mb-2">遊戲結束!</p>
                            <button
                                onClick={restartGame}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                重新開始
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={() => router.push('/')}
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                返回首頁
            </button>
        </div>
    );
};

export default Game;