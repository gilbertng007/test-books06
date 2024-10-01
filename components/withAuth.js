import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';

export default function withAuth(WrappedComponent) {
    return (props) => {
        const { user } = useAppContext();
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.push('/login');
            }
        }, [user]);

        if (!user) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
}
