import React from 'react'
import assets from '../../../assets/assets.js'


function LeftSideBar() {
  return (
    <div className='bg-[#001030] text-white h-[75vh]'>
        <div className='p-5' >
            <div className='flex justify-between items-center'>
                <img src={assets.logo} className='max-w-36' alt="Logo" />
                <div>
                    <img src={assets.menu_icon} className='max-h-5 cursor-pointer opacity-[0.6]' alt="Menu Icon" />
                </div>
            </div>
            <div className='bg-[#002670] flex items-center gap-2 py-2.5 px-3 mt-5'>
                <img src={assets.search_icon} className='w-4' alt="Search icon" />
                <input type="text" className='bg-transparent border-0 outline-0 text-white text-[11px] input-text-[#c8c8c8]' placeholder='Search here' />
            </div>
        </div>
        <div className='flex flex-col h-[70%] overflow-y-scroll'>
           {
            Array(12).fill("").map((items, index)=> ( <div key={index} className='flex  items-center gap-2 py-2.5 px-3 text-[13px] hover:bg-[#077EFF]'>
                <img src={assets.profile_img} className='w-8.75 aspect-square rounded-[50%] ' alt="" />
                <div className='flex flex-col '>
                    <p>Richard Sanford</p>
                    <span className='text-[#9f9f9f] text-[11px] hover:text-white'>Hello, How are you?</span>
                </div>
                </div>))
           }
        </div>
    </div>
  )
}

export default LeftSideBar