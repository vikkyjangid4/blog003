import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../utils/auth'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication status from server on load
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await authAPI.checkStatus()
      if (response.success && response.logged_in) {
        setUser(response.user)
      } else {
        // Clear any stored user data
        localStorage.removeItem('boganto_admin_user')
        setUser(null)
      }
    } catch (error) {
      setUser(null)
    }
    setLoading(false)
  }

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials)
      if (response.success && response.user) {
        setUser(response.user)
        localStorage.setItem('boganto_admin_user', JSON.stringify(response.user))
        return { success: true, user: response.user }
      } else {
        return { success: false, message: response.message || 'Login failed' }
      }
    } catch (error) {
      return { success: false, message: error.message || 'Login failed' }
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (error) {
      // Logout error - continue anyway
    }
    setUser(null)
    localStorage.removeItem('boganto_admin_user')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext