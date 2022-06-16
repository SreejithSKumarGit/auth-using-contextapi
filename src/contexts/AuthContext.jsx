import React from "react";

export const AuthContext=React.createContext();

export function AuthContextProvider({children})
{
    const [isAuth,toggleAuth]=React.useState(false);

    
    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}