import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Container, Grid, Paper } from '@mui/material';

export default function OrderDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if (id) {
            // 這裡應該從後端 API 獲取訂單詳情
            const fetchOrderDetail = async () => {
                // 模擬從 API 獲取數據
                const mockOrder = {
                    id: id,
                    date: '2023-05-01',
                    total: 59.98,
                    status: '已發貨',
                    items: [
                        { id: 1, title: '範例書籍 1', price: 29.99, quantity: 1 },
                        { id: 2, title: '範例書籍 2', price: 29.99, quantity: 1 },
                    ],
                    shippingAddress: '123 測試街道, 測試市, 測試國 12345',
                };
                setOrder(mockOrder);
            };
            fetchOrderDetail();
        }
    }, [id]);

    if (!order) return <div>載入中...</div>;

    return (
        <Container maxWidth="md" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                訂單詳情 #{order.id}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className="p-4">
                        <Typography variant="h6" gutterBottom>訂單資訊</Typography>
                        <Typography>日期：{order.date}</Typography>
                        <Typography>狀態：{order.status}</Typography>
                        <Typography>總額：${order.total.toFixed(2)}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className="p-4">
                        <Typography variant="h6" gutterBottom>送貨地址</Typography>
                        <Typography>{order.shippingAddress}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className="p-4">
                        <Typography variant="h6" gutterBottom>訂單項目</Typography>
                        {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-2">
                                <div>
                                    <Typography>{item.title}</Typography>
                                    <Typography variant="body2">數量：{item.quantity}</Typography>
                                </div>
                                <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                            </div>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
