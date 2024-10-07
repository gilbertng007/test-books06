import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BookIcon from '@mui/icons-material/Book';
import Confetti from 'react-confetti';
import { Howl } from 'howler';
import { motion, AnimatePresence } from 'framer-motion';

const WavingFlagButton = ({ onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.1, 1],
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="relative bg-transparent border-none cursor-pointer focus:outline-none"
      style={{ width: '150px', height: '75px' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 150 75" className="absolute top-0 left-0 w-full h-full">
        <defs>
          <linearGradient id="flagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#cc0000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <motion.path
          d="M7.5,7.5 Q37.5,0 67.5,7.5 T127.5,7.5 L142.5,7.5 L142.5,67.5 L7.5,67.5 Z"
          fill="url(#flagGradient)"
          stroke="#990000"
          strokeWidth="2"
          animate={{
            d: [
              "M7.5,7.5 Q37.5,0 67.5,7.5 T127.5,7.5 L142.5,7.5 L142.5,67.5 L7.5,67.5 Z",
              "M7.5,7.5 Q37.5,15 67.5,7.5 T127.5,15 L142.5,15 L142.5,67.5 L7.5,67.5 Z",
              "M7.5,7.5 Q37.5,0 67.5,7.5 T127.5,7.5 L142.5,7.5 L142.5,67.5 L7.5,67.5 Z"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </svg>
      <motion.span 
        className="relative z-10 font-bold text-lg"
        style={{ color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        animate={{ 
          textShadow: ['1px 1px 2px rgba(0, 0, 0, 0.5)', '2px 2px 4px rgba(0, 0, 0, 0.5)', '1px 1px 2px rgba(0, 0, 0, 0.5)']
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        2024年新書推介
      </motion.span>
    </motion.button>
  );
};

const Banana = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + (direction * 5);
        if (newX > window.innerWidth - 100) {
          setDirection(-1);
          newX = window.innerWidth - 100;
        } else if (newX < 0) {
          setDirection(1);
          newX = 0;
        }
        return { x: newX, y: prev.y };
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [direction]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const buttonClicked = localStorage.getItem('newBooksButtonClicked') === 'true';
      setIsButtonVisible(router.pathname === '/' || (router.pathname !== '/new-books-2024' && !buttonClicked));
    }
  }, [router.pathname]);

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('newBooksButtonClicked', 'true');
    }
    setIsButtonVisible(false);
    router.push('/new-books-2024');
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: position.x,
        zIndex: 1000,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
    >
      <motion.img
        src="/banana-character.png"
        alt="Walking Banana"
        style={{ width: '100px', height: 'auto' }}
        animate={{ scaleX: direction }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '-85px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          <WavingFlagButton onClick={handleButtonClick} isVisible={isButtonVisible} />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function Navbar() {
  const router = useRouter();
  const cartItemsCount = 0;
  const [playMusic, setPlayMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  const handleLinkClick = () => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: ['/bejin.mp3'],
        loop: true,
      });
    }
    soundRef.current.play();
    setPlayMusic(true);
    setIsPlaying(true);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('newBooksButtonClicked');
    }
  };

  const handlePlayPause = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);

  return (
    <div className="relative">
      <AppBar position="static" className="bg-blue-600">
        <Toolbar className="justify-between px-4">
          <Typography variant="h6" component="div" className="flex items-center">
            <Link
              href="/"
              className="text-white no-underline flex items-center hover:bg-gradient-to-r hover:bg-red-500 hover:text-white hover:rounded hover:px-4 hover:py-2"
              onClick={handleLinkClick}
            >
              <BookIcon className="text-5xl text-yellow-300 mr-2" />
              <span className="text-2xl font-bold">當當首頁 - 彩蛋歌曲</span>
            </Link>
            <IconButton
              color="inherit"
              onClick={handlePlayPause}
              className="ml-2"
              aria-label={isPlaying ? "暫停音樂" : "播放音樂"}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Typography>
          <div className="flex items-center space-x-2 ml-auto">
            <Button
              color="inherit"
              onClick={() => router.push('/orders')}
              className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
            >
              我的訂單
            </Button>
            <IconButton
              color="inherit"
              onClick={() => router.push('/cart')}
              className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
            >
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button
              color="inherit"
              onClick={() => router.push('/login')}
              className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
            >
              登錄
            </Button>
            <Button
              color="inherit"
              onClick={() => router.push('/register')}
              className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
            >
              註冊
            </Button>
            <Button
              color="inherit"
              onClick={() => router.push('/game')}
              className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300"
              startIcon={<SportsEsportsIcon />}
            >
              遊戲
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {playMusic && (
        <Confetti
          count={100}
          size={20}
          gravity={0.1}
          style={{ width: '100%', height: '100vh' }}
        />
      )}
      <Banana />
    </div>
  );
}
