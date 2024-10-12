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
            1.  當當網上書店的聯繫我們詳細列明如下：
          </Typography>
          <Box sx={{ color: '#fff', opacity: 0.8 }}>
            <ul>
              <li>電郵：<Link href="mailto:example@bookstore.com" color="inherit">example@bookstore.com</Link></li>
              <li>電話：<Link href="tel:12345678" color="inherit">12345678</Link></li>
              <li>地址：Hong Kong 大安區仁愛路1號</li>
            </ul>
            <br />
            <ul>
              <li>2.  DreamBooks Co. Ltd.</li>
              <li>Address: 123 Innovation Drive, Suite 456, Silicon Valley, CA 94089, USA </li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: info@dreamtechsolutions.com</li>
            </ul>
            <br />
            <ul>
              <li>3.  東京株式会社</li>
              <li>住所: 東京都港区六本木1-1-1 </li>
              <li>電話番号: +81-3-1234-5678</li>
              <li>メールアドレス: info@tokyo-co.jp</li>
            </ul>
            <br />
            <ul>
              <li>4.  Entreprise Parisienne</li>
              <li>Adresse:1 Rue de la Paix, 75000 Paris, France</li>
              <li>Téléphone: +33-1-2345-6789</li>
              <li>E-mail: contact@parisian-company.fr </li>
            </ul>
            <br />
            <ul>
              <li>5.  Berliner Unternehmens GmbH</li>
              <li>Adresse: Alexanderplatz 1, 10178 Berlin, Deutschland</li>
              <li>Telefon: +49-30-1234-5678 </li>
              <li>E-Mail: kontakt@berliner-unternehmen.de   </li>
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