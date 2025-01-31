import React from 'react'
import { BiSolidCircle } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { HiOutlineChatBubbleLeft } from 'react-icons/hi2'
import { LuLoaderPinwheel } from 'react-icons/lu'
import { MdOutlineCall } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AllChatBottomSection = () => {
  return (
    <div className=" flex justify-between px-5 text-xl border-t-1 border-gray-700 font-bold bottom h-[10vh] w-screen bg-gray-800 text-gray-400">
        <Link className="chatIcon flex flex-col justify-center items-center focus:text-white ">
                    <div className='flex'>
                        <HiOutlineChatBubbleLeft className='text-2xl' />
                        <BiSolidCircle className='text-green-500 text-sm' />
                    </div>

                    <label htmlFor="">Chats</label>

                </Link>

                <Link className="chatIcon flex flex-col justify-center items-center focus:text-white ">


                    <div className='flex '>
                        <MdOutlineCall className='text-2xl' />
                        <BiSolidCircle className='text-gray-700 text-sm' />
                    </div>
                    <label htmlFor="">Call</label>


                </Link>


                <Link className="chatIcon flex flex-col justify-center items-center focus:text-white ">



                    <div className='flex '>
                        <LuLoaderPinwheel className='text-2xl' />
                        <BiSolidCircle className='text-green-500 text-sm' />
                    </div>
                    <label htmlFor="">Updates</label>

                </Link>


                <Link className="chatIcon flex flex-col justify-center items-center focus:text-white">

                    
                    <div className='flex '>
                    <BsShop className='text-2xl' />
                        <BiSolidCircle className='text-green-500 text-sm' />
                    </div>
                    <label htmlFor="">Tools</label>
                </Link>

        </div>
  )
}

export default AllChatBottomSection