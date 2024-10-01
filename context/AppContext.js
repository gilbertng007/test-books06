import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 這裡可以從本地存儲或 API 獲取初始狀態
    }, []);

    const addToCart = (book, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === book.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCart, { ...book, quantity }];
            }
        });
    };

    const removeFromCart = (bookId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== bookId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AppContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            user,
            login,
            logout
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
