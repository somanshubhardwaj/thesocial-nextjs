import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const SigninUser = async (email: string, password: string) => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
    try {
      setLoading(true);
      await login(email, password);
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      toast.error("Failed to login", (error as any).message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, SigninUser };
};
export default useSignin;
