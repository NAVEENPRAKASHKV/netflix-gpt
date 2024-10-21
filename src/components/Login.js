import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm] =useState(true)
  const toggleSingInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }


  return (
    <div className="relative w-full h-screen">
      <div><Header /></div>

      {/* Background image */}
      <div className="absolute inset-0 z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="background"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <div className="p-14  w-full sm:w-8/12 lg:w-4/12 bg-black bg-opacity-75 text-white  rounded-lg">
          <h1 className="text-4xl font-bold mb-4">{isSignInForm? "Sign In" :"Sign Up"}</h1>
          <form className="flex flex-col ">
            {!isSignInForm && <input
              type="text"
              placeholder="Full Name"
              className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
            />}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
            />
            <input
              type="password"
              placeholder="Password"
              className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
            />
            <button className="my-2 p-2  text-lg bg-red-600 hover:bg-red-700 transition rounded-md">
            {isSignInForm? "Sign In" :"Sign Up"}
            </button>
            <p className="text-sm cursor-pointer my-2" onClick={toggleSingInForm}>{isSignInForm?"Already Registered ? Sign In Now":"New to Netflix? Sign Up Now"}</p>
          </form>
        </div>
      </div>
    </div>
  );  
};

export default Login;
