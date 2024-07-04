// app/page.tsx
'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function HomePage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  console.log(currentUser);
 

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to the protected page, {currentUser.email}!</h1>
      <a href="/logout">Logout</a>
    </div>
  );
}

export default HomePage;
