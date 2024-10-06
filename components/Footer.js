import { Typography, Container, Link as MuiLink, Box, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { SiWechat, SiTiktok, SiXiaohongshu } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-6 mt-auto">
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    {new Date().getFullYear()} 當當書店. 版權所有.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    <MuiLink
                        href="/about"
                        color="inherit"
                        sx={{
                            fontSize: 16,
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                    >
                        關於我們
                    </MuiLink>
                    {' | '}
                    <MuiLink
                        href="/contact"
                        color="inherit"
                        sx={{
                            fontSize: 16,
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                    >
                        聯繫我們
                    </MuiLink>
                    {' | '}
                    <MuiLink
                        href="/privacy"
                        color="inherit"
                        sx={{
                            fontSize: 16,
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                    >
                        隱私政策
                    </MuiLink>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <IconButton href="https://www.wechat.com" target="_blank" rel="noopener noreferrer">
                        <SiWechat />
                    </IconButton>
                    <IconButton href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <SiTiktok />
                    </IconButton>
                    <IconButton href="https://www.xiaohongshu.com" target="_blank" rel="noopener noreferrer">
                        <SiXiaohongshu />
                    </IconButton>
                    <IconButton href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <WhatsApp />
                    </IconButton>
                    <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </IconButton>
                    <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </IconButton>
                </Box>
            </Container>
        </footer>
    );
}

