import { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <Container maxWidth="lg" className="my-8">
            <Typography variant="h2" component="h1" gutterBottom className="text-center mb-8">
                歡迎來到我們的網上書店
            </Typography>
            <Grid container spacing={4}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card className="h-full flex flex-col">
                            <CardMedia
                                component="img"
                                height="140"
                                image={book.cover_image}
                                alt={book.title}
                            />
                            <CardContent className="flex-grow">
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    作者：{book.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    價格：${book.price}
                                </Typography>
                            </CardContent>
                            <div className="p-4">
                                <Link href={`/books/${book.id}`} passHref>
                                    <Button variant="contained" color="primary" fullWidth>
                                        查看詳情
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
