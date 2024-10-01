import { useState } from 'react';
import { Typography, Container, TextField, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';

export default function Checkout() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 這裡應該有處理訂單提交的邏輯
        console.log('訂單資訊:', formData);
        // 模擬訂單處理
        await new Promise(resolve => setTimeout(resolve, 1000));
        // 導航到訂單確認頁面
        router.push('/order-confirmation');
    };

    return (
        <Container maxWidth="md" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                結帳
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="name"
                            label="姓名"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="email"
                            label="電子郵件"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="address"
                            label="地址"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="city"
                            label="城市"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="postalCode"
                            label="郵遞區號"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="country"
                            label="國家"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    fullWidth
                >
                    提交訂單
                </Button>
            </form>
        </Container>
    );
}
