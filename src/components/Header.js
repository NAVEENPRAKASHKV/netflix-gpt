import React,{useEffect} from "react";
import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";




const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signin and signup
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        // signout
        dispatch(removeUser());
        navigate('/')
      }
    });
    //to unsubscribe when component unmount - this is a good practice
    return ()=>{unsubscribe() } 
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. added in onAuthStateChanged
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')
      });
  };
  return (
    <div className="w-screen absolute z-50 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-40"
        src= {LOGO}
        alt="logo"
      />
      { user &&
      <div className="flex p-2 ">
        <p className="my-auto text-white">{user?.displayName}</p>
         <img
          className="w-10 h-10 my-auto mx-5 rounded-full"
          src={user?.photoURL}
          alt="icon"
        />
        <button
          className="p-3 bg-red-700 text-white rounded-2xl "
          onClick={handleSignOut}
        >
          SignOut
        </button> 
      </div> }
    </div>
  );
};

export default Header;
