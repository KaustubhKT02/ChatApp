import React from 'react'
import assets from '../../../assets/assets.js'


function LeftSideBar() {
  return (
    <div className='bg-[#001030] text-white h-[75vh]'>
        <div className='p-5' >
            <div className='flex justify-between items-center'>
                <img src={assets.logo} className='max-w-36' alt="" />
                <div>
                    <img src={assets.menu_icon} className='max-h-5' alt="" />
                </div>
            </div>
            <div>
                <img src={assets.search_icon} alt="" />
                <input type="text" placeholder='Search here' />
            </div>
        </div>
        <div>
            <div>
                <img src={assets.profile_img} alt="" />
                <div>
                    <p>Richard Sanford</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar