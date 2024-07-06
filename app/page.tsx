// app/page.tsx
"use client";
import useUser from "@/hooks/useUser";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainSection from "@/components/MainSection";

function HomePage() {
  const { currentUser } = useAuth();
 
  const router = useRouter();

  const { user, loading } = useUser();






  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null; // or a loading spinner
  }

  return (
    <MainSection/>
    
  );
}

export default HomePage;


{/* <div>
      <h1>Welcome to the protected page, {currentUser.email}!</h1>
      <h2>Your user details:</h2>
      {user?.fullName && <p>Full Name: {user.fullName}</p>}

      <a href="/logout">Logout</a>
    </div> */}