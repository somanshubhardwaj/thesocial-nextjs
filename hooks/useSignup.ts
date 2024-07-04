import toast from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useAuth();

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
      const response = await fetch("/api/users/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, fullName, gender }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        toast.error(data.error);
        return false;
      }

      await createUser(email, password);
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
