// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.trim().toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, There i am using chat app",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
    toast.success("Signup Successfully!!!")
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
    console.log(error.message);

  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password) 
    toast.success("login successfully!!!")
  } catch (error) {
    console.log(error.message)
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async ()=> {
 try {
  await signOut(auth)
  toast.success("logout Successfully!!!")
 } catch (error) {
  console.log(error.message)
    toast.error(error.code.split('/')[1].split('-').join(" "));
 }
}



export {signup, login, logout, auth,db};

