import React from "react";
import { FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useUser from "@/hooks/useUser";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
const Sidebar = () => {
  const { user, loading } = useUser();
  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="flex gap-3 mt-4 flex-col">
        <div className="flex items-center gap-3 ">
          <FaXTwitter className="text-4xl text-white" />
          <span className="text-2xl text-white">TheSocial</span>
        </div>
        {/* <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>{" "}
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>{" "}
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>{" "}
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </div> */}
      </div>
      <div className="flex gap-3 ">
        <img
          src={user?.profilePic || "https://www.gravatar.com/avatar/000?d=mp"}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h2 className="font-semibold">{user.fullName}</h2>
          <p className="text-xs text-gray-500">@{user.username}</p>
        </div>
        <div className="">
          <Link href="/logout">
            <IoLogOutOutline className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
