import { createContext, useContext, useState } from "react";

//create a context
export const AuthContext = createContext();

//make hook for only this project
export const useAuth = () => useContext(AuthContext);

//share it
export default function AuthProvider({children}){
  //put som e state in the context
  const [number, setNumber] = useState(0);

  const [isAuthenticated, setAuthenticated] = useState(false);

  //setInterval( () => setNumber(number + 1), 2000);

  return(
    <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated} }>
      { children }

    </AuthContext.Provider>
  )
}

