import { CircularProgress } from '@mui/material';

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <CircularProgress />
        </div>
    );
}
