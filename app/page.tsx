// app/page.tsx
"use client";
import useUser from "@/hooks/useUser";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function HomePage() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState<
    { username: any; fullName: any; profilePicture: any } | undefined
  >(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await useUser(currentUser?.email);
      setUser(userData);
    };

    fetchUser();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to the protected page, {currentUser.email}!</h1>
      <h2>Your user details:</h2>
      {user?.fullName && <p>Full Name: {user.fullName}</p>}

      <a href="/logout">Logout</a>
    </div>
  );
}

export default HomePage;
