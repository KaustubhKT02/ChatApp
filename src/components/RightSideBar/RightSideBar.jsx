import React from "react";
import assets from "../../../assets/assets.js";

function RightSideBar() {
  return (
    <div className="text-white bg-[#001030] relative h-[75vh] overflow-y-scroll">
      <div className="pt-10 text-center max-w-[80%] m-auto ">
        <img src={assets.profile_img} alt="Profile img" className="w-27.5 aspect-square m-auto rounded-[50%]" />
        <h3 className="text-[18px] text-center font-normal flex items-center justify-center gap-1.25 my-1.25 mx-0 ">
          Richard Sanford{" "}
          <img
            src={assets.green_dot}
            alt="green_dot icon"
            className="w-3.75 !important"
          />
        </h3>
        <p className="text-[10px] opacity-80 font-light ">Hey, There i am Richard Sanford using chat app</p>
        <hr className="border-[#ffffff50] my-3.75 mx-0" />
        <div className="py-0 px-1 font-[13px]">
          <p>Media</p>
          <div className="max-h-50 overflow-y-scroll grid grid-cols-3 gap-1.25 mt-2">
            <img src={assets.pic1} className="w-15 rounded-sm cursor-pointer"  alt="" />
            <img src={assets.pic2} className="w-15 rounded-sm cursor-pointer" alt="" />
            <img src={assets.pic3} className="w-15 rounded-sm cursor-pointer" alt="" />
            <img src={assets.pic4} className="w-15 rounded-sm cursor-pointer" alt="" />
            <img src={assets.pic1} className="w-15 rounded-sm cursor-pointer" alt="" />
            <img src={assets.pic2} className="w-15 rounded-sm cursor-pointer" alt="" />
          </div>
        </div>
        <button className=" absolute bottom-5 left-[50%] transform translate-x-[-50%] bg-[#077eff] text-white border-0 text-[12px] font-light py-2.5 px-4 rounded-[20px] cursor-pointer hover:text-red-600 ">Logout</button>
      </div>
    </div>
  );
}

export default RightSideBar;
