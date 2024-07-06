import toast from "react-hot-toast";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

const useAddPost = () => {
  const [loading, setLoading] = useState(false);

  const AddPost = async (userId: string, fullName:string ,username:string,profilePic:string ,post: string) => {
    if (!post) {
      toast.error("Please write something to post");
      return false;
    }
    try {
      setLoading(true);
      const postRef = await addDoc(collection(db, "posts"), {
        userId,
        fullName,
        username,
        profilePic,
        post,
        likecount: 0,
        commentcount: 0,
        likes: [],
        comments: [],
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", postRef.id);
      toast.success("Post added successfully");
      setLoading(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add post");
      setLoading(false);
    }
  };

  return { loading, AddPost };
};

export default useAddPost;