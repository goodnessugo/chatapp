import React from 'react'
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { MdOutlineCall } from "react-icons/md";
import { LuLoaderPinwheel } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom"
import { BiSolidCircle } from "react-icons/bi";
import AllChatBottomSection from './AllChatBottomSection';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import AllPersonalChat from './AllPersonalChat';

const AllChat = () => {
    return (
        <div className='h-[100vh] w-screen '>


            {/* ------------top Section------------------ */}
            <div className="top h-[10vh] w-screen bg-gray-800 text-gray-100 border-b-1 border-gray-600 flex justify-between items-center px-3">
                <div>
                    <label htmlFor="" className='text-3xl  font-bold'>Versus</label>
                </div>

                <div className='cameraSearchBar flex justify-between items-center  text-3xl '>

                    <MdOutlineCameraAlt />
                    <IoSearch className='mx-3' />
                    <BsThreeDotsVertical />
                </div>
            </div>


            {/*-------------- allPersonalChat -----------------*/}
           
            <AllPersonalChat />

            {/* -----------end of allPersonalChat */}



            {/* ----------bottonSection----------- */}

            <AllChatBottomSection />

            {/* --------end of bottonSection--------- */}


        </div>
    )
}

export default AllChat