import { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFavorites = async () => {
            const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
            const favoriteBooks = await Promise.all(
                favoriteIds.map(async (id) => {
                    const response = await fetch(`/api/books/${id}`);
                    return response.json();
                })
            );
            setFavorites(favoriteBooks);
        };

        fetchFavorites();
    }, []);

    const removeFavorite = (id) => {
        const newFavorites = favorites.filter(book => book.id !== id);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites.map(book => book.id)));
    };

    return (
        <Container maxWidth="lg" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                我的收藏
            </Typography>
            <Grid container spacing={4}>
                {favorites.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={book.cover_image}
                                alt={book.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    作者：{book.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    價格：${book.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => router.push(`/books/${book.id}`)}
                                    className="mt-2"
                                >
                                    查看詳情
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => removeFavorite(book.id)}
                                    className="mt-2 ml-2"
                                >
                                    移除收藏
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}