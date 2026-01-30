import React from "react";
import assets from "../../../assets/assets";

function ChatBox() {
  return (
    <div className="h-[75vh] relative bg-[#f1f5ff] ">
      <div className="py-2.5 px-3.5 flex items-center gap-2.5 border-b border-b-gray-300">
        <img
          src={assets.profile_img}
          className="w-6.5 rounded-[50%] first:w-9.5 frist:aspact-square"
          alt="Profile-img"
        />
        <p className="flex-1 font-medium text-[20px] text-[#393939] flex items-center gap-1">
          Richard Sanford{" "}
          <img
            src={assets.green_dot}
            className="w-3.75 !important"
            alt="green-dot icon"
          />
        </p>
        <img src={assets.help_icon} alt="help icon" />
      </div>
    </div>
  );
}

export default ChatBox;
