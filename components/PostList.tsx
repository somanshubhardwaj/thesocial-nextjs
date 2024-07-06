import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";

import useFetchPosts from "@/hooks/useFetchPosts";
const Postlist = () => {
  const { fetchPosts, loading } = useFetchPosts();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);



  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-2 mt-4 w-full">
      {posts.map((post: any,index:number) => (
        <PostCard
          key={index}
          fullName={post.fullName}
          username={post.username}
          profilePic={post.profilePic || "https://www.gravatar.com/avatar/000?d=mp"}
          post={post.post}
        />
      ))}
      
    </div>
  );
};

export default Postlist;

interface PostCardProps {
 
  fullName: any;
  username: any;
  profilePic: any;
  post: any;
}

const PostCard = ({ fullName, username, profilePic, post }: PostCardProps) => {
  return (
    <div  className="text-white rounded-3xl p-4  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="flex items-center space-x-2 p-2">
        <div>
          <div className="flex gap-2">
            <img
              src={profilePic}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{fullName}</h2>
              <p className="text-xs text-gray-500">@{username}</p>
            </div>
          </div>

          <p className="text-sm pt-2">
           {post}
          </p>
        </div>
      </div>
      {/* <div className="flex px-2 pb-2">
        <div className="flex-1 flex items-center gap-1">
          <AiOutlineLike className=" text-2xl" />
          <span className="text-gray-400">10</span>
        </div>
        <div className="flex-1 flex items-center gap-1">
          <FaRegComment className=" text-2xl" />
          <span className="text-gray-400">10</span>
        </div>
        <div className="flex-1 flex items-center gap-1">
          <FiShare className=" text-2xl" />
          <span className="text-gray-400">10</span>
        </div>
      </div> */}
    </div>
  );
};
