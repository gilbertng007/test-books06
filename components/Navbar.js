
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BookIcon from '@mui/icons-material/Book'; // Import the BookIcon
import Confetti from 'react-confetti'; // Import the Confetti library
import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

export default function Navbar() {
  const router = useRouter();
  const cartItemsCount = 0;
  const [playMusic, setPlayMusic] = useState(false); // Define playMusic state variable here

  const handleLinkClick = () => {
    setPlayMusic(true); // Trigger music playback on link click
    // You can also add other effects here, like animating the link or icon
  };

  useEffect(() => {
    if (playMusic) {
      const sound = new Howl({
        src: ['http://localhost:3000/bejin.mp3'], // replace with your own audio file
        autoplay: true,
        loop: true,
      });
      sound.play();
      // Stop music after 5 seconds
      setTimeout(() => {
        sound.stop();
        setPlayMusic(false);
      }, 245000);
    }
  }, [playMusic]); // Now playMusic is defined in this scope

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
        <Toolbar sx={{ padding: '0 20px' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            <Link href="/" className="text-white no-underline" onClick={handleLinkClick}>
              <BookIcon sx={{ fontSize: 56, color: 'yellowgreen', marginRight: 1 }} />
              當當書店首頁
            </Link>
          </Typography>
          <Button
            color="inherit"
            onClick={() => router.push('/orders')}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              marginRight: 2,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            我的訂單
          </Button>
          <IconButton
            color="inherit"
            onClick={() => router.push('/cart')}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              marginRight: 2,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Button
            color="inherit"
            onClick={() => router.push('/login')}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              marginLeft: 2,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            登錄
          </Button>
          <Button
            color="inherit"
            onClick={() => router.push('/register')}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              marginLeft: 2,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            註冊
          </Button>
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
    </div>
  );
}
