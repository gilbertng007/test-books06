import { Alert, AlertTitle } from '@mui/material';

export default function ErrorMessage({ message }) {
    return (
        <Alert severity="error">
            <AlertTitle>錯誤</AlertTitle>
            {message}
        </Alert>
    );
}
