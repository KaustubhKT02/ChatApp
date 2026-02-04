import React, { useState } from "react";
import assets from "../../../assets/assets.js";

function ProfileUpdate() {
  const [image, setImage] = useState(false)
  return (
    <div className="min-h-dvh bg-[url(/background.png)] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-white flex items-center justify-between min-w-175 rounded-[10px] ">
        <form action="" className="flex flex-col gap-5 p-10">
          <h3 className="font-medium">Profile Details</h3>
          <label
            className="flex items-center gap-2.5 text-gray-500 cursor-pointer"
            htmlFor="avatar"
          >
            <input onChange={(e)=> setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg"
              hidden
            />
            <img
              src={image? URL.createObjectURL(image) :assets.avatar_icon}
              className="w-12.5 aspect-square  rounded-[50%]"
              alt="avatar icon"
            />
            upload profile image
          </label>
          <input
            type="text"
            className="p-2.5 min-w-75 border border-solid border-[#c9c9c9] outline-[#077eff] "
            placeholder="Your name"
            required
          />
          <textarea
            placeholder="Write profile bio"
            className="p-2.5 min-w-75 border border-solid border-[#c9c9c9] outline-[#077eff] "
            required
          ></textarea>
          <button
            type="submit"
            className="border-0 text-white bg-[#077eff] p-2 text-[16px] cursor-pointer hover:bg-blue-800 transition-all"
          >
            Save
          </button>
        </form>
        <img
          src={image? URL.createObjectURL(image) :assets.logo_icon}
          className="max-w-40 aspect-square my-5 mx-auto rounded-[15px]"
          alt="logo icon"
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;
