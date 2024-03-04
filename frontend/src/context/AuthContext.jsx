import { createContext, useState } from "react";

export const AuthContext = createContext({ isAuthenticated: false })

export const AuthContextProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userId, setUserId] = useState(null)
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    )
}