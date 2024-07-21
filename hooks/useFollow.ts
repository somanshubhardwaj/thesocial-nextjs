import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
const useFollow = () => {
  const followUser = async (username: string) => {
    const { currentUser } = useAuth();

    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        following: arrayUnion(username),
      });

      toast.success("User followed successfully");
    } catch (error) {
      console.error("Error following user: ", error);
    }
  };

  return { followUser };
};

export default useFollow;
