import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AppWrapper } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const theme = createTheme({
    // 自定義主題
});

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Component {...pageProps} />
                    </main>
                    <Footer />
                </div>
            </ThemeProvider>
        </AppWrapper>
    );
}

export default MyApp;
