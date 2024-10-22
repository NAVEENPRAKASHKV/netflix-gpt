import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/checkValidData";
import { auth } from "../utils/firebase";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGORUND_LOGIN,USER_AVATAR } from "../utils/constants";




const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch()


  const handleButtonClick = () => {
    // validated the data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      
    );
    setErrorMessage(message);
    if (message) return; // any error then return to prevent furter execution of code

    // sign In and sign UP
    if (!isSignInForm) {
      // sign up login
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            // remaining logic is in onAuthStateChage api in header take care
            
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          console.log(user)
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage( errorCode +"-"+errorMessage)
          // ..
        });
    } else {
      // sign in login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Further sign-in in onAuthStateChage api in header take care
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
    }
  };
  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      <div>
        <Header />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-10">
        <img
          className="w-full h-full object-cover"
          src={BACKGORUND_LOGIN  }
          alt="background"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <div className="p-14  w-full sm:w-8/12 xl:w-4/12 bg-black bg-opacity-75 text-white  rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col ">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="my-4 px-4 py-3 border-[1px] border-red-600 rounded-md bg-gray-800 text-white text-lg "
            />
            <p className="font-medium text-sm text-red-600">{errorMessage}</p>
            <button
              className="my-2 p-2  text-lg bg-red-600 hover:bg-red-700 transition rounded-md"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-sm cursor-pointer my-2"
              onClick={toggleSingInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already Registered ? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
