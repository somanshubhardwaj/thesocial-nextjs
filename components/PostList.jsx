import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
const Postlist = () => {
  return (
    <div className='flex flex-col gap-2 mt-4'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />

    </div>
  )
}

export default Postlist

const PostCard = () => {
  return (
    <div className="text-white rounded-3xl p-4  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="flex items-center space-x-2 p-2">
        <div>
          <div className="flex gap-2">
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

          <p className="text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloremque, quod voluptates, quas, voluptatum atque quidem
            perspiciatis quibusdam doloribus quia dolorum. Quisquam doloremque,
            quod voluptates, quas, voluptatum atque quidem perspiciatis
            quibusdam doloribus quia dolorum.
          </p>
        </div>
      </div>
      <div className='flex px-2 pb-2'>
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

      </div>
    </div>
  )
}