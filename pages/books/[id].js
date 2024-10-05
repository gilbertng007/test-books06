import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Container, Grid, Button, TextField } from '@mui/material';
import axios from 'axios';
import styles from '../Book.module.css';

export default function BookDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [videoUrl, setVideoUrl] = useState(null); // new state variable to store video URL

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                try {
                    // const response = await axios.get(`https://freetestapi.com/api/v1/books/${id}`);
                    const response = await axios.get(`/api/books/${id}`);
                    setBook(response.data);
                    setVideoUrl(response.data.cover_video); // set video URL from API response
                } catch (error) {
                    console.error('Error fetching book details:', error);
                }
            };
            fetchBook();
        }
    }, [id]);

    const addToCart = () => {

        // 這裡將實現添加到購物車的邏輯
        const addToCartLogic = async () => {
            try {
                // 這裡應該是從 API 獲取購物車數據的邏輯
                const response = await axios.post('/api/cart', {
                    bookId: id,
                    quantity: quantity,
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        };
        addToCartLogic();

        console.log(`Added ${quantity} of book ${id} to cart`);
    };

    if (!book) return <div>載入中...</div>;

    return (
        <Container maxWidth="md" className="my-8">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img src={book.cover_image} alt={book.title} className="w-full rounded-lg shadow-lg" />

                    {/* {videoUrl && ( */}
                    {/* <video
                        src={book.cover_video} alt={book.title}
                        controls
                        className="w-full rounded-lg shadow-lg mt-4"
                    /> */}
                    <video
                        className={styles.video}
                        width="640"
                        height="480"
                        controls
                    >
                        <source src={book.cover_video} alt={book.title} type="video/mp4" />
                        您的瀏覽器不支援視頻標籤。
                    </video>

                    {/* )} */}

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {book.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        作者：{book.author}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {book.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        價格：${book.price}
                    </Typography>
                    <div className="flex items-center gap-4 my-4">
                        <TextField
                            type="number"
                            label="數量"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                            inputProps={{ min: 1 }}
                        />
                        <Button variant="contained" color="primary" onClick={addToCart}>
                            加入購物車
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
