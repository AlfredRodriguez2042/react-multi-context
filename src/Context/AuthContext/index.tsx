import { createContext, useContext, useMemo, useReducer } from 'react'
import { AuthProps, IAuthProvider } from './Interfaces'
import { AuthReducers } from './Reducers'

const AuthContext = createContext<IAuthProvider | undefined>(undefined)
const AuthProvider = ({ children }: AuthProps) => {
  const initialState = {
    user: null,
    errors: null,
    loading: false,
  }
  const [authState, dispatch] = useReducer(AuthReducers, initialState)
  const state = useMemo(() => ({ ...authState, dispatch }), [authState])
  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  )
}
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }
  return context
}
export default AuthProvider
