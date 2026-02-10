import React, { useEffect, useState } from "react";
import assets from "../../../assets/assets.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase.config.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import upload from "../../lib/upload.js";

function ProfileUpdate() {
  const [image, setImage] = useState(false);
  const [name, setName] = useState(" ");
  const [bio, setBio] = useState(" ");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const navigate = useNavigate();

  const profileUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!prevImage && !image) {
        toast.error("Upload profile Picture!!!");
      }
      const docRef = doc(db, "users", uid);
      if (image) {
        const imgUrl = await upload(image);
        setPrevImage(imgUrl);
        await updateDoc(docRef, {
          avatar: imgUrl,
          bio: bio,
          name: name,
        });
      } else {
        await updateDoc(docRef, {
          bio: bio,
          name: name,
        });
      }
    } catch (errr) {}
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="min-h-dvh bg-[url(/background.png)] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-white flex items-center justify-between min-w-175 rounded-[10px] ">
        <form onSubmit={profileUpdate} className="flex flex-col gap-5 p-10">
          <h3 className="font-medium">Profile Details</h3>
          <label
            className="flex items-center gap-2.5 text-gray-500 cursor-pointer"
            htmlFor="avatar"
          >
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              className="w-12.5 aspect-square  rounded-[50%]"
              alt="avatar icon"
            />
            upload profile image
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="p-2.5 min-w-75 border border-solid border-[#c9c9c9] outline-[#077eff] "
            placeholder="Your name"
            required
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
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
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
          className="max-w-40 aspect-square my-5 mx-auto rounded-[15px]"
          alt="logo icon"
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;
