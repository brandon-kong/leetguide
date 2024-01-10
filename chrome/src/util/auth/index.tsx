import { useEffect, useState } from "react";
import { AuthContext } from "./context";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    const logout = () => {
        chrome.storage.local.remove(['code'])
        setAuthenticated(false)
    }

    useEffect(() => {
        setLoading(true)
        chrome.storage.local.get(['code'], (result) => {
          if (result.code) {
            setAuthenticated(true)
          }
 
            setLoading(false)
        })
      }, [setAuthenticated])
      
    return (
        <AuthContext.Provider 
        value={{ authenticated, setAuthenticated, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}