import { Typography, Link, Box, Grid } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF7 90%)',
      padding: 4,
      borderRadius: 2,
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
            聯繫我們
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8 }}>
            網上書店的聯繫我們詳細列明如下：
          </Typography>
          <Box sx={{ color: '#fff', opacity: 0.8 }}>
            <ul>
              <li>電郵：<Link href="mailto:example@bookstore.com" color="inherit">example@bookstore.com</Link></li>
              <li>電話：<Link href="tel:12345678" color="inherit">12345678</Link></li>
              <li>地址：HK市大安區仁愛路1號</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#fff' } }}>
            關於我們
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: '#fff', opacity: 0.6 }}>
            歡迎您與我們聯繫！我們的團隊將盡快回覆您的查詢。
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}