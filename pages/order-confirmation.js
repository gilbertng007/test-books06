import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function OrderConfirmation() {
    return (
        <Container maxWidth="md" className="my-8 text-center">
            <Typography variant="h4" component="h1" gutterBottom>
                訂單確認
            </Typography>
            <Typography variant="body1" paragraph>
                感謝您的訂購！您的訂單已成功提交。
            </Typography>
            <Typography variant="body1" paragraph>
                訂單編號：#12345
            </Typography>
            <Link href="/orders" passHref>
                <Button variant="contained" color="primary">
                    查看訂單
                </Button>
            </Link>
        </Container>
    );
}
