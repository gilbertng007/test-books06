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
    const [addedToCart, setAddedToCart] = useState(false); // new state variable to track if order has been added to cart
    const [showMessage, setShowMessage] = useState(false); // new state variable to show the message

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                try {
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

    const addToCart = async () => {
        try {
            const response = await axios.post('/api/cart', {
                bookId: id,
                quantity: quantity,
            });
            console.log(response.data);
            setAddedToCart(true);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                setQuantity(1); // reset quantity to 1
                router.push(router.asPath); // reload the page
            }, 2000);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <Container maxWidth="md" className="my-8">
            {!book ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <img src={book.cover_image} alt={book.title} className="w-full rounded-lg shadow-lg" />

                            {videoUrl && (
                                <video
                                    src={book.cover_video}
                                    alt={book.title}
                                    controls
                                    className="w-full rounded-lg shadow-lg mt-4"
                                />
                            )}
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
                            {showMessage && (
                                <Typography variant="body1" paragraph className="text-green-500">
                                    訂單已被加入購物車了!
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
}

