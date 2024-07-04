// app/login/page.tsx
'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import useSignin from '@/hooks/useSignin';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const { SigninUser } = useSignin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await SigninUser(email, password);
      if (success){
      router.push('/');}
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Login
      </h2>
      <form className="mt-4 space-y-4">
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            className="w-full px-4 py-2 bg-transparent text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

const Page = () => {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen text-white">
      <Login />
    </div>
  );
};
export default Page;
