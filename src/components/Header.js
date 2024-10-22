import React from "react";
import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
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
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
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
      </div>
    </div>
  );
};

export default Header;
