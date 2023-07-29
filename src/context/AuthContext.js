import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
   
     const [currentUser, setcurrentUser] = useState({}); //We are going to store Current user which is signed in 

     useEffect(() => {
       
        //We are Checking  whether we have a user or not .
        //with  the help of using Firebase function 

       const unsub =  onAuthStateChanged(auth,(user) =>{
           
             setcurrentUser(user);
       
        });

      
      
        return () =>{
            unsub();
        };
     }, []);

     return(
     <AuthContext.Provider value={{currentUser}}>
        {children}
     </AuthContext.Provider>
     );
};
