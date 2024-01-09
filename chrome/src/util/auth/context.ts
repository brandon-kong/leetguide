import { useContext, createContext } from "react"

type AuthContextType = {
    authenticated: boolean
    setAuthenticated: (authenticated: boolean) => void
    logout: () => void
    loading: boolean
}
  
export const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    setAuthenticated: () => {},
    logout: () => {},
    loading: true,
});
  
export const useAuth = () => useContext(AuthContext)