import { Typography, Link } from '@mui/material';

export default function About() {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', textShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        關於我們
      </Typography>
      <Typography variant="body1" style={{ color: '#666', fontSize: '18px', lineHeight: '1.5', backgroundColor: '#fff', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        當當網上書店是您的最佳選擇！我們提供各種書籍，包括小說、詩歌、散文、科普書籍等。無論您是喜歡閱讀還是喜歡購買書籍，網上書店都是您的理想之地。
      </Typography>
      <Typography variant="body1" style={{ color: '#999', fontSize: '16px', lineHeight: '1.2', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        當當網上書店成立於2010年，旨在為讀者提供優質的書籍和服務。經過多年的發展，我們已經成為業界領先的網上書店之一。
      </Typography>
      <Typography variant="body1" style={{ color: '#666', fontSize: '18px', lineHeight: '1.5', backgroundColor: '#fff', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', animation: 'fadeIn 2s' }}>
        我們的書籍來自於各大出版社和作者，包括一些知名的作家和學者。無論您是喜歡閱讀經典作品還是喜歡追蹤最新的出版物，網上書店都能滿足您的需求。
      </Typography>
      <Typography variant="body1" style={{ color: '#999', fontSize: '16px', lineHeight: '1.2', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        除了書籍之外，網上書店還提供各種服務，包括書籍推薦、書評、作者專欄等。您可以在網上書店找到您喜歡的書籍和作者，並與其他讀者分享您的閱讀經驗。
      </Typography>
      <Link href="/contact" color="inherit" style={{ textDecoration: 'none', color: '#337ab7', fontSize: '18px', fontWeight: 'bold', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', animation: 'fadeIn 2s' }}>
        聯繫我們
      </Link>
      <video width="640" height="480" controls>
        <source src="/video-01.mp4" type="video/mp4" />
        您的瀏覽器不支援視頻標籤。
      </video>
    </div>
  );
}