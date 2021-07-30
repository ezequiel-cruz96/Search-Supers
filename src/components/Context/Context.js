import React, { useState} from 'react';
import { createContext} from 'react';


export const AppContext = createContext(null);

export default function AppContextProvider({children}){


  let [login, setLogin] = useState("Login")

  function addLogin(login){
      setLogin(login)
  }
  
  return(
    <AppContext.Provider value={
        {login,addLogin}
    }
    >
    

    {children}
    </AppContext.Provider>
    
  )
}