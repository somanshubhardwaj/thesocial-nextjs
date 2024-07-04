// app/logout/page.tsx
'use client';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await logout();
        router.push('/login');
      } catch (error) {
        console.error('Failed to logout:', error);
      }
    };
    doLogout();
  }, [logout, router]);

  return <div>Logging out...</div>;
}
