import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
const useFetchUsers = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [userList, setUserList] = useState<any>([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser) {
        setLoading(true);
        const q = query(
          collection(db, "users"),
          where("userId", "!=", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        setUserList(querySnapshot.docs.map((doc) => doc.data()));

        setLoading(false);
      }
    };

    fetchUser();
  }, [currentUser]);

  return { userList, loading };
};
export default useFetchUsers;
