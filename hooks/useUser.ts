import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { doc, getDocs, query, where, collection } from "firebase/firestore";

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [user, setUser] = useState<any>({
    userId: "",
    email: "",
    username: "",
    photoURL: "",
    createdAt: "",
  });
  const db = getFirestore();

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser) {
        setLoading(true);
        const q = query(
          collection(db, "users"),
          where("userId", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });

        setLoading(false);
      }
    };

    fetchUser();
  }, [currentUser]);

  return { user, loading };
};

export default useUser;
