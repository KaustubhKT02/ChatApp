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
        <img src={assets.help_icon} className="max-w-6" alt="help icon" />
      </div>
      {/* Chat message */}
      <div className="h-[calc(100%-70px)] pb-12.5 overflow-y-scroll flex flex-col-reverse">
        <div className="flex items-end  flex-row-reverse justify-start gap-1.25 py-0 px-3.75">
          <p className="text-white bg-[#077EFF] p-4 max-w-50 text-[11px] font-light rounded-t-lg rounded-b-lg rounded-l-lg  mb-7.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae doloremque molestias ea dignissimos.
          </p>
          <div>
            <img
              src={assets.profile_img}
              className="w-6.75 aspect-square rounded-[50px] "
              alt=""
            />
            <p className="text-center text-[9px] ">2:30pm</p>
          </div>
        </div>
        <div className="flex items-end  flex-row- justify-end gap-1.25 py-0 px-3.75">
          <img
            src={assets.pic1}
            className="max-w-57.5 mb-7.5 rounded-[10px]"
            alt=""
          />
          <div>
            <img
              src={assets.profile_img}
              className="w-6.75 aspect-square rounded-[50px] "
              alt=""
            />
            <p className="text-center text-[9px] ">2:30pm</p>
          </div>
        </div>
        <div className="flex items-end gap-1.25 py-0 px-3.75 flex-row-reverse justify-end">
          <p className="text-white bg-[#077EFF] p-4 max-w-50 text-[11px] font-light rounded-t-lg rounded-b-lg rounded-l-lg  mb-7.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae doloremque molestias ea dignissimos.
          </p>
          <div>
            <img
              src={assets.profile_img}
              className="w-6.75 aspect-square rounded-[50px] "
              alt=""
            />
            <p className="text-center text-[9px] ">2:30pm</p>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-5 py-2.5 px-3.5 bg-white absolute bottom-0 left-0 right-0">
        <input
          type="text"
          className="flex-1 border-0 outline-0"
          placeholder="Send a message"
        />
        <input
          type="file"
          className="cursor-pointer w-7.5"
          id="image"
          accept="image/png, image/jpeg"
          hidden
        />
        <label className="flex " htmlFor="image">
          <img
            src={assets.gallery_icon}
            className="cursor-pointer w-5.5"
            alt="gallery_icon"
          />
        </label>
        <img
          src={assets.send_button}
          className="cursor-pointer w-7.5"
          alt="Send button icon"
        />
      </div>
    </div>
  );
}

export default ChatBox;
