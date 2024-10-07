import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const BookCard = ({ title, author, description, language }) => (
    <div className="mb-6 overflow-hidden rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm opacity-80">{author}</p>
        </div>
        <div className="p-4 bg-white">
            <p className={`text-sm ${language === 'en' ? 'font-serif' : 'font-sans'}`}>{description}</p>
        </div>
    </div>
);

export default function NewBooks2024() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-8 text-gray-800"
            >
                2024年全世界最暢銷的新書籍
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">中文書籍</h2>
                    <div className="h-[600px] overflow-y-auto pr-4">
                        <BookCard
                            title="秋葉家的作品系列"
                            author="秋葉"
                            description="《秒懂 AI 寫作》、《秒懂 AI 提問》、《秒懂 AI 設計》在2024年的暢銷書排行榜上佔據重要位置。這一系列的書籍旨在幫助讀者快速理解並應用AI技術於寫作、提問及設計等領域，受到廣泛歡迎。"
                            language="zh"
                        />
                        <BookCard
                            title="愛的終結"
                            description="《愛的終結》是一部去年10月發行的新書，它探討了愛情在現代社會中的轉變與挑戰，以及人們面對感情關係時的複雜心態。"
                            language="zh"
                        />
                        <BookCard
                            title="焦慮的人"
                            description="小說《焦慮的人》以其出人意料的設定講述了平凡人的故事，通過這些人物的生活展示了當今社會中普遍存在的焦慮感。"
                            language="zh"
                        />
                        <BookCard
                            title="你以为你是谁"
                            author="艾麗絲·門羅"
                            description="諾貝爾文學獎得主艾麗絲·門羅的新作《你以为你是谁》深入挖掘了個體身份認同的問題，通過一系列短篇故事展現了人物成長的過程。"
                            language="zh"
                        />
                        <BookCard
                            title="山茶文具店"
                            description="《山茶文具店》講述了一家日本代筆文具店的故事，通過店主的視角探討了傳統與現代文化的碰撞。"
                            language="zh"
                        />
                        <BookCard
                            title="萬歷十五年"
                            description="《萬歷十五年》從獨特的角度闡釋中國歷史，特別是明朝時期的政治、文化及社會面貌。"
                            language="zh"
                        />
                        <BookCard
                            title="殺死一隻知更鳥"
                            author="哈珀·李"
                            description="《殺死一隻知更鳥》是一部經典成長小說，通過小女孩的視角觀察成人世界的複雜性。"
                            language="zh"
                        />
                        <BookCard
                            title="小王子"
                            author="安托萬·德·聖埃克蘇佩里"
                            description="《小王子》是一部寫給成年人的童話，通過小王子的旅行經歷傳達了深刻的人生哲理。"
                            language="zh"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">English Books</h2>
                    <div className="h-[600px] overflow-y-auto pr-4">
                        <BookCard
                            title="Understanding AI Series"
                            author="Qiu Ye"
                            description="The works by Qiu Ye, 'Understanding AI Writing,' 'Understanding AI Questioning,' and 'Understanding AI Design,' have secured significant positions on the bestseller lists of 2024. This series aims to help readers quickly understand and apply AI technology in writing, questioning, and design, and has been widely welcomed."
                            language="en"
                        />
                        <BookCard
                            title="The End of Love"
                            description="'The End of Love' is a new book released in October of the previous year. It explores the transformation and challenges of love in modern society, as well as the complex mindset people face in romantic relationships."
                            language="en"
                        />
                        <BookCard
                            title="The Anxious People"
                            description="'The Anxious People' is a novel that tells the story of ordinary people through unexpected settings, showcasing the pervasive sense of anxiety present in today's society through these characters' lives."
                            language="en"
                        />
                        <BookCard
                            title="Who Do You Think You Are?"
                            author="Alice Munro"
                            description="Nobel Prize laureate Alice Munro's new work, 'Who Do You Think You Are?', delves into the issue of individual identity through a series of short stories that showcase the process of character growth."
                            language="en"
                        />
                        <BookCard
                            title="The Camellia Stationery Shop"
                            description="'The Camellia Stationery Shop' tells the story of a Japanese stationery shop specializing in letter writing, exploring the clash between traditional and modern culture from the perspective of the shop owner."
                            language="en"
                        />
                        <BookCard
                            title="1587, A Year of No Significance"
                            description="'1587, A Year of No Significance' offers a unique interpretation of Chinese history, particularly focusing on the political, cultural, and social landscape during the Ming Dynasty."
                            language="en"
                        />
                        <BookCard
                            title="To Kill a Mockingbird"
                            author="Harper Lee"
                            description="'To Kill a Mockingbird' is a classic coming-of-age novel that observes the complexities of the adult world through the eyes of a young girl."
                            language="en"
                        />
                        <BookCard
                            title="The Little Prince"
                            author="Antoine de Saint-Exupéry"
                            description="'The Little Prince' is a fairy tale written for adults, conveying profound life philosophies through the travels and experiences of the little prince."
                            language="en"
                        />

                    </div>
                    <video
                        className={styles.video}
                        width="640"
                        height="480"
                        controls
                    >
                        <source src="/video-01.mp4" type="video/mp4" />
                        您的瀏覽器不支援視頻標籤。
                    </video>
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


