// import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function Navbar() {
//     const router = useRouter();
//     // 這裡應該從全局狀態獲取購物車項目數量
//     const cartItemsCount = 0;

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     <Link href="/" className="text-white no-underline">
//                         當當網上書店首頁
//                     </Link>
//                 </Typography>
//                 <Button color="inherit" onClick={() => router.push('/orders')}>
//                     我的訂單
//                 </Button>
//                 <IconButton color="inherit" onClick={() => router.push('/cart')}>
//                     <Badge badgeContent={cartItemsCount} color="error">
//                         <ShoppingCartIcon />
//                     </Badge>
//                 </IconButton>
//                 <Button color="inherit" onClick={() => router.push('/login')}>
//                     登錄
//                 </Button>
//                 <Button color="inherit" onClick={() => router.push('/register')}>
//                     註冊
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     );
// }




import { AppBar, Toolbar, Typography, Button, IconButton, Badge, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const cartItemsCount = 0;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
      <Toolbar sx={{ padding: '0 20px' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          <Link href="/" className="text-white no-underline">
            當當網上書店首頁
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
        <TextField
          label="搜索書籍"
          sx={{
            width: 200,
            height: 42,
            backgroundColor: '#fff',
            '& .MuiInputBase-input': {
              color: '#333',
              padding: '10px',
            },
            '& .MuiInputLabel-root': {
              color: '#333',
              left: '10px',
            },
            '&:hover': {
              backgroundColor: '#fff',
              borderColor: '#333',
            },
            marginRight: 2,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        />
        <Button
          color="inherit"
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          搜索
        </Button>
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
  );
}
