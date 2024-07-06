import React from "react";
import Post from "./Post";
import Postlist from "./PostList";
import Userlist from "./Userlist";
import Sidebar from "./Sidebar";

const MainSection = () => {
  return (
    <div className="flex self-stretch gap-3 h-full justify-between w-full">
      <div className="w-80 overflow-auto rounded-3xl h-full hidden-scrollbar shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
      </div>
      <div className=" flex-1 flex justify-center ">
        <div className="w-3/4 overflow-auto hidden-scrollbar">
          <Post />
          <Postlist />
        </div>
      </div>
      {/* <div className="w-80  overflow-auto rounded-3xl h-full hidden-scrollbar  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Userlist />
      </div> */}
    </div>
  );
};

export default MainSection;
