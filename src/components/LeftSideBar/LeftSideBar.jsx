import { react, use, useContext, useState } from "react";
import assets from "../../../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config.js";
import { AppContext } from "../../context/AppContext.jsx";

function LeftSideBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  const [user, setUser] = useState(null);
  const [showSearch, setShowserch] = useState(false);

  const inputHanlder = async (e) => {
    try {
      const input = e.target.value.trim().toLowerCase();

      if (input) {
        setShowserch(true);

        const userRef = collection(db, "users");
        const q = query(userRef, where("username", "==", input));

        const querySnap = await getDocs(q);
        if (!querySnap.empty) {
          const userData = querySnap.docs[0].data();
          console.log(userData);
          setUser(userData); // Don't forget to set user
        } else {
          setUser(null);
        }
      } else {
        setShowserch(false);
        setUser(null);
      }
    } catch (error) {
      console.log("Error searching for user:", error);
    }
  };
  return (
    <div className="bg-[#001030] text-white h-[75vh]">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} className="max-w-36" alt="Logo" />
          <div className="relative py-2.5 px-0 ">
            <img
              src={assets.menu_icon}
              className="max-h-5 cursor-pointer opacity-[0.6]"
              onClick={() => setOpen(!open)}
              alt="Menu Icon"
            />
            {open && (
              <div className="absolute top-full right-0 w-32.5 p-5 rounded-[5px]  bg-white text-black ">
                <p
                  className="cursor-pointer text-[14px] hover:text-blue-600"
                  onClick={() => navigate("/profile")}
                >
                  Edit Profile
                </p>
                <hr className="border-0 h-px bg-[#a4a4a4] my-2 mx-0  " />
                <p className="cursor-pointer text-[14px] hover:text-red-600">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#002670] flex items-center gap-2 py-2.5 px-3 mt-5">
          <img src={assets.search_icon} className="w-4" alt="Search icon" />
          <input
            type="text"
            onChange={inputHanlder}
            className="bg-transparent border-0 outline-0 text-white text-[11px] input-text-[#c8c8c8]"
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="flex flex-col h-[70%] overflow-y-scroll">
        {showSearch && user ? (
          <div className="flex  items-center gap-2 py-2.5 px-3 text-[13px] hover:bg-[#077EFF]">
            <img
              src={user.avatar}
              className="w-8.75 aspect-square rounded-[50%] "
              alt=""
            />
            <div className="flex flex-col ">
              <p>{user.name}</p>
              <span className="text-[#9f9f9f] text-[11px] hover:text-white">
                Hello, How are you?
              </span>
            </div>

            {/* {Array(12)
          .fill("")
          .map((items, index) => (
            <div
              key={index}
              className="flex  items-center gap-2 py-2.5 px-3 text-[13px] hover:bg-[#077EFF]"
            >
              <img
                src={user.avatar}
                className="w-8.75 aspect-square rounded-[50%] "
                alt=""
              />
              <div className="flex flex-col ">
                <p>{user.name}</p>
                <span className="text-[#9f9f9f] text-[11px] hover:text-white">
                  Hello, How are you?
                </span>
              </div>
            </div>
          ))} */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LeftSideBar;
