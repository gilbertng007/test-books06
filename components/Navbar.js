import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BookIcon from '@mui/icons-material/Book';
import Confetti from 'react-confetti';
import { Howl } from 'howler';
import { motion } from 'framer-motion';

const Banana = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

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
    </motion.div>
  );
};

export default function Navbar() {
  const router = useRouter();
  const cartItemsCount = 0;
  const [playMusic, setPlayMusic] = useState(false);

  const handleLinkClick = () => {
    setPlayMusic(true);
  };

  useEffect(() => {
    if (playMusic) {
      const sound = new Howl({
        src: ['/bejin.mp3'],
        autoplay: true,
        loop: true,
      });
      sound.play();
      setTimeout(() => {
        sound.stop();
        setPlayMusic(false);
      }, 245000);
    }
  }, [playMusic]);

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
              <span className="text-2xl font-bold">當當書店首頁 - 彩蛋歌曲</span>
            </Link>
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




