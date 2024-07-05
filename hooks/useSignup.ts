import toast from "react-hot-toast";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const SignupUser = async (
    email: string,
    username: string,
    fullName: string,
    password: string,
    confirmPassword: string,
    gender: string
  ) => {
    if (
      !email ||
      !username ||
      !fullName ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: fullName,
      });
      const userRef = await addDoc(collection(db, "users"), {
        userId: user.uid,
        username,
        fullName,
        gender,
        email,
        profilePic: "",
        bio: "",
        website: "",
        followers: [],
        following: [],
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", userRef.id);

      toast.success("User created successfully");

      return true;
    } catch (error) {
      toast.error("Failed to create user", (error as any).message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { SignupUser, loading };
};

export default useSignup;
