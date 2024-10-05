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
    return (
        <AppWrapper>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <AnimatePresence mode="wait" initial={false}>
                        <main className="flex-grow" key={router.pathname}>
                            <Component {...pageProps} />
                        </main>
                    </AnimatePresence>
                    <Footer />
                </div>
            </ThemeProvider>
        </AppWrapper>
    );
}

export default MyApp;
