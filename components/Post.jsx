import React from "react";

const Post = () => {
  //create post
  return (
    <div className="text-white rounded-3xl p-4  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="flex items-center space-x-2 p-2">
        <div className="w-full">
          <div className="flex gap-2 py-2">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">Jane Doe</h2>
              <p className="text-xs text-gray-500">@jane_doe</p>
            </div>
          </div>

          <form className="w-full">
            <div className="w-full">
              <textarea
                className="w-full p-2 border border-gray-500 rounded-md  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white  h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
