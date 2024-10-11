import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, ShoppingCart, X, Trash2 } from 'lucide-react';
import Link from 'next/link';

const Button = ({ children, variant = 'default', size = 'default', active = false, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: active ? "border border-input bg-accent text-accent-foreground" : "border border-input hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    };
    const sizeStyles = {
        default: "h-10 py-2 px-4",
        icon: "h-10 w-10",
        sm: "h-9 px-3",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
            {...props}
        >
            {children}
        </button>
    );
};

const BookCard = ({ book, onAddToFavorites, onAddToCart, isFavorite, isInCart, cartQuantity }) => (
    <div className="mb-6 overflow-hidden rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm opacity-80">{book.author}</p>
        </div>
        <div className="p-4 bg-white">
            <div className="flex">
                <img src={book.imageUrl} alt={book.title} className="w-1/3 h-auto object-contain mr-4" />
                <div className="w-2/3">
                    <p className={`text-sm ${book.language === 'en' ? 'font-serif' : 'font-sans'} mb-4`}>{book.description}</p>
                    <p className="text-lg font-bold mb-2">Price: ${book.price.toFixed(2)}</p>
                    <div className="flex justify-center mb-4">
                        <video className="w-1/2 h-auto rounded mx-auto" controls>
                            <source src={book.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <Button
                    variant="outline"
                    size="icon"
                    active={isFavorite}
                    onClick={() => onAddToFavorites(book)}
                >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                    <span className="sr-only">Add to favorites</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    active={isInCart}
                    onClick={() => onAddToCart(book)}
                    className="relative"
                >
                    <ShoppingCart className={`h-4 w-4 ${isInCart ? 'fill-current' : ''}`} />
                    {cartQuantity > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartQuantity}
                        </span>
                    )}
                    <span className="sr-only">Add to cart</span>
                </Button>
            </div>
        </div>
    </div>
);

export default function NewBooks2024() {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [showFavorites, setShowFavorites] = useState(true);
    const [showCart, setShowCart] = useState(true);
    const [toast, setToast] = useState(null);

    const addToFavorites = (book) => {
        setFavorites(prev => {
            const isBookInFavorites = prev.some(item => item.id === book.id);
            if (isBookInFavorites) {
                setToast({ message: "已從收藏中移除", type: "info" });
                return prev.filter(item => item.id !== book.id);
            } else {
                setToast({ message: "已加入收藏", type: "success" });
                return [...prev, book];
            }
        });
    };

    const removeFromFavorites = (bookId) => {
        setFavorites(prev => prev.filter(item => item.id !== bookId));
    };

    const addToCart = (book) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === book.id);
            if (existingItem) {
                setToast({ message: "已更新購物車數量", type: "info" });
                return prev.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                setToast({ message: "已加入購物車", type: "success" });
                return [...prev, { ...book, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (bookId) => {
        setCart(prev => prev.filter(item => item.id !== bookId));
    };

    const getTotalCartPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const confirmOrder = () => {
        if (cart.length > 0) {
            setToast({ message: "訂單已確認", type: "success" });
            setCart([]); // 清空購物車
        } else {
            setToast({ message: "購物車是空的", type: "info" });
        }
    };

    const chineseBooks = [
        {
            id: 1,
            title: "秋葉家的作品系列",
            author: "秋葉",
            description: "《秒懂 AI 寫作》、《秒懂 AI 提問》、《秒懂 AI 設計》在2024年的暢銷書排行榜上佔據重要位置。這一系列的書籍旨在幫助讀者快速理解並應用AI技術於寫作、提問及設計等領域，受到廣泛歡迎。",
            language: "zh",
            imageUrl: "/images/world-01.png?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 29.99
        },
        {
            id: 2,
            title: "愛的終結",
            author: "未知",
            description: "《愛的終結》是一部去年10月發行的新書，它探討了愛情在現代社會中的轉變與挑戰，以及人們面對感情關係時的複雜心態。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 24.99
        },
        {
            id: 3,
            title: "焦慮的人",
            author: "未知",
            description: "小說《焦慮的人》以其出人意料的設定講述了平凡人的故事，通過這些人物的生活展示了當今社會中普遍存在的焦慮感。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 19.99
        },
        {
            id: 4,
            title: "你以为你是谁",
            author: "艾麗絲·門羅",
            description: "諾貝爾文學獎得主艾麗絲·門羅的新作《你以为你是谁》深入挖掘了個體身份認同的問題，通過一系列短篇故事展現了人物成長的過程。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 27.99
        },
        {
            id: 5,
            title: "山茶文具店",
            author: "未知",
            description: "《山茶文具店》講述了一家日本代筆文具店的故事，通過店主的視角探討了傳統與現代文化的碰撞。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 22.99
        },
        {
            id: 6,
            title: "萬歷十五年",
            author: "未知",
            description: "《萬歷十五年》從獨特的角度闡釋中國歷史，特別是明朝時期的政治、文化及社會面貌。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 26.99
        },
        {
            id: 7,
            title: "殺死一隻知更鳥",
            author: "哈珀·李",
            description: "《殺死一隻知更鳥》是一部經典成長小說，通過小女孩的視角觀察成人世界的複雜性。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 18.99
        },
        {
            id: 8,
            title: "小王子",
            author: "安托萬·德·聖埃克蘇佩里",
            description: "《小王子》是一部寫給成年人的童話，通過小王子的旅行經歷傳達了深刻的人生哲理。",
            language: "zh",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-02.mp4",
            price: 15.99
        }
    ];

    const englishBooks = [
        {
            id: 9,
            title: "Understanding AI Series",
            author: "Qiu Ye",
            description: "The works by Qiu Ye, 'Understanding AI Writing,' 'Understanding AI Questioning,' and 'Understanding AI Design,' have secured significant positions on the bestseller lists of 2024. This series aims to help readers quickly understand and apply AI technology in writing, questioning, and design, and has been widely welcomed.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 34.99
        },
        {
            id: 10,
            title: "The End of Love",
            author: "Unknown",
            description: "'The End of Love' is a new book released in October of the previous year. It explores the transformation and challenges of love in modern society, as well as the complex mindset people face in romantic relationships.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 25.99
        },
        {
            id: 11,
            title: "The Anxious People",
            author: "Unknown",
            description: "'The Anxious People' is a novel that tells the story of ordinary people through unexpected settings, showcasing the pervasive sense of anxiety present in today's society through these characters' lives.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 23.99
        },
        {
            id: 12,
            title: "Who Do You Think You Are?",
            author: "Alice Munro",
            description: "Nobel Prize laureate Alice Munro's new work, 'Who Do You Think You Are?', delves into the issue of individual identity through a series of short stories that showcase the process of character growth.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 28.99
        },
        {
            id: 13,
            title: "The Camellia Stationery Shop",
            author: "Unknown",
            description: "'The Camellia Stationery Shop' tells the story of a Japanese stationery shop specializing in letter writing, exploring the clash between traditional and modern culture from the perspective of the shop owner.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 21.99
        },
        {
            id: 14,
            title: "1587, A Year of No Significance",
            author: "Unknown",
            description: "'1587, A Year of No Significance' offers a unique interpretation of Chinese history, particularly focusing on the political, cultural, and social landscape during the Ming Dynasty.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 27.99
        },
        {
            id: 15,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "'To Kill a Mockingbird' is a classic coming-of-age novel that observes the complexities of the adult world through the eyes of a young girl.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 19.99
        },
        {
            id: 16,
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            description: "'The Little Prince' is a fairy tale written for adults, conveying profound life philosophies through the travels and experiences of the little prince.",
            language: "en",
            imageUrl: "/placeholder.svg?height=200&width=300",
            videoUrl: "/video/ai-01.mp4",
            price: 16.99
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
            <div className="flex justify-between items-center mb-8">
                <Link href="/">
                    <Button variant="outline" size="icon">
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Return to homepage</span>
                    </Button>
                </Link>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-gray-800"
                >
                    2024年全世界最暢銷的新書籍
                </motion.h1>
                <div className="w-10" /> {/* Placeholder for layout balance */}
            </div>

            {toast && (
                <CustomToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">中文書籍</h2>
                    <div className="h-[780px] overflow-y-auto pr-4">
                        {chineseBooks.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                                onAddToFavorites={addToFavorites}
                                onAddToCart={addToCart}
                                isFavorite={favorites.some(item => item.id === book.id)}
                                isInCart={cart.some(item => item.id === book.id)}
                                cartQuantity={cart.find(item => item.id === book.id)?.quantity || 0}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">English Books</h2>
                    <div className="h-[780px] overflow-y-auto pr-4">
                        {englishBooks.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                                onAddToFavorites={addToFavorites}
                                onAddToCart={addToCart}
                                isFavorite={favorites.some(item => item.id === book.id)}
                                isInCart={cart.some(item => item.id === book.id)}
                                cartQuantity={cart.find(item => item.id === book.id)?.quantity || 0}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold">Favorites ({favorites.length})</h3>
                            <Button variant="outline" size="sm" onClick={() => setShowFavorites(!showFavorites)}>
                                {showFavorites ? <X className="h-4 w-4" /> : 'Show'}
                            </Button>
                        </div>
                        {showFavorites && (
                            <ul className="space-y-2">
                                {favorites.map(book => (
                                    <li key={book.id} className="flex justify-between items-center bg-white p-2 rounded">
                                        <span>{book.title}</span>
                                        <Button variant="destructive" size="sm" onClick={() => removeFromFavorites(book.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold">Shopping Cart</h3>
                            <Button variant="outline" size="sm" onClick={() => setShowCart(!showCart)}>
                                {showCart ? <X className="h-4 w-4" /> : 'Show'}
                            </Button>
                        </div>
                        {showCart && (
                            <>
                                <ul className="space-y-2">
                                    {cart.map(item => (
                                        <li key={item.id} className="flex justify-between items-center bg-white p-2 rounded">
                                            <span>{item.title} (x{item.quantity})</span>
                                            <div className="flex items-center">
                                                <span className="mr-2">${(item.price * item.quantity).toFixed(2)}</span>
                                                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 font-bold text-right">Total: ${getTotalCartPrice().toFixed(2)}</p>
                                <div className="mt-4 text-right">
                                    <Button
                                        variant="default"
                                        size="default"
                                        onClick={confirmOrder}
                                        className="hover:text-red-500 transition-colors duration-200"
                                    >
                                        確認訂單
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <footer className="text-center text-gray-600 text-sm">
                <p>這些書籍涵蓋了多種主題，從科技、文學到個人成長和社會觀察，反映了當前讀者的興趣和關注點。</p>
                <p className="mt-2">These books cover a wide range of topics, from technology and literature to personal growth and social observation, reflecting current readers' interests and concerns.</p>
            </footer>
        </div>
    );
}

const CustomToast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}>
            {message}
        </div>
    );
};
