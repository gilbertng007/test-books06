


import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

const BookFilter = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http:/api/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    const handleSearch = async () => {
        if (searchQuery.trim() === '') return;
        const filteredBooks = books.filter((book) => {
            return book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredBooks(filteredBooks);
        if (filteredBooks.length === 0) {
            setSearchResult('Not found');
        } else {
            setSearchResult(null);
        }
    };

    return (
        <div className="p-4">

            <div style={{ marginTop: '-2.5rem' }}>
                <TextField
                    label="搜索書名或作者"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    size="small"
                    sx={{ marginRight: '1rem' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>

            {searchResult === 'Not found' ? (
                <Typography variant="body1" color="error">
                    Not found
                </Typography>
            ) : (
                <Grid container spacing={4}>
                    {filteredBooks.map((book) => (
                        <Grid item xs={12} sm={6} md={4} key={book.id}>
                            <Card className="h-full flex flex-col">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={book.cover_image}
                                />
                                <CardContent className="flex-grow">
                                    <Typography gutterBottom variant="h5" component="div">
                                        {book.title}
                                    </Typography>
                                    <Link href={`/books/${book.id}`} passHref>
                                        <Button variant="contained" color="primary" fullWidth>
                                            View Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default BookFilter;