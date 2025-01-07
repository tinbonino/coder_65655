import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser]= useState({name:"Juan",loggedIn:true});

    const toggleLogin = () => {
      setUser((prevState)=>({...prevState,loggedIn: !prevState.loggedIn}))
    }

    return (
        <UserContext.Provider value={{user, toggleLogin}}>
            {children}
        </UserContext.Provider>
    )
  
}
