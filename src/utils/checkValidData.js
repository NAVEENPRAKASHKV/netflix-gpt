export const checkValidData = (email, password,name="") => {
    const emailRex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Use RegExp object
    const passwordRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Use RegExp object
    const nameRex = /^(?=.*\S)[a-zA-Z\s]{2,30}$/

    if (!emailRex.test(email)) return "❌Please enter a valid email address";
    if (!passwordRex.test(password)) return "❌Your password must contain between 4 and 60 characters.";
    
    if( name && !nameRex.test(name))  {return "❌Please enter a valid name (2-30 alphabetic characters only)."}
    
    return null;
  };
  