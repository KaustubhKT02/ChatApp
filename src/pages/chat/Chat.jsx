import React from 'react'
import { LeftSideBar, ChatBox, RightSideBar } from '../../components'

function Chat() {
  return (
    <div className='min-h-dvh bg-linear-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]  grid place-content-center'>
      {/* Chat container */}
      <div className='w-4xl h-[75vh] bg-white max-w-250 grid grid-cols-[1fr_2fr_1fr] '>
        {/* Left Sidebar */}
        <LeftSideBar />
        {/* Chat Box */}
        <ChatBox />
        {/* Right Sidebar */}
        <RightSideBar />

      </div>
    </div>
  )
}

export default Chat