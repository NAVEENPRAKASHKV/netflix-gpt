export const checkValidData = (email, password) => {
    const emailRex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Use RegExp object
    const passwordRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Use RegExp object
    

    if (!emailRex.test(email)) return "❌Please enter a valid email address";
    if (!passwordRex.test(password)) return "❌Your password must contain between 4 and 60 characters.";
    
   
    return null;
  };
  