import { useState, useEffect } from "react";
import { getDocs, collection ,orderBy,query} from "firebase/firestore";

import { db } from "@/lib/firebase";

const useFetchPosts = () => {
  const [loading, setLoading] = useState(false);


  const fetchPosts = async () => {
    try {
      setLoading(true);
      const colRef = collection(db, "posts");
      const q = query(colRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data: any = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    } catch (error) {
      console.error("Error fetching posts: ", error);
      return [];
    } finally {
      setLoading(false);
    }
  
  };

  return { loading, fetchPosts };
};

export default useFetchPosts;
