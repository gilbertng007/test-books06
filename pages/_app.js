
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AppWrapper } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

const theme = createTheme({
    // 自定義主題
});

function MyApp({ Component, pageProps, router }) {
    const isGamePage = router.pathname === '/game';
    const isEnglishPage = router.pathname === '/foreign-publications/english';
    const isJanpanesePage = router.pathname === '/foreign-publications/japanese';
    const isFrenchPage = router.pathname === '/foreign-publications/french';
    const isGermanyPage = router.pathname === '/foreign-publications/germany';
    const isNewbooksPage = router.pathname === '/new-books-2024';

    return (
        <AppWrapper>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="flex flex-col min-h-screen">
                    {!isGamePage && !isEnglishPage && !isJanpanesePage && !isFrenchPage && !isGermanyPage && !isNewbooksPage && <Navbar />}
                    <AnimatePresence mode="wait" initial={false}>
                        <main className="flex-grow" key={router.pathname}>
                            <Component {...pageProps} />
                        </main>
                    </AnimatePresence>
                    {!isGamePage && <Footer />}
                </div>
            </ThemeProvider>
        </AppWrapper>
    );
}

export default MyApp;
