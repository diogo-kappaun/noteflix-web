import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@noteflix:user', JSON.stringify(user))
      localStorage.setItem('@noteflix:token', token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })
    } catch (e) {
      if (e.response) {
        return toast.error(e.response.data.message)
      } else {
        return toast.error('Não foi possível entrar!')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@noteflix:token')
    const user = localStorage.getItem('@noteflix:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  function signOut() {
    localStorage.removeItem('@noteflix:user')
    localStorage.removeItem('@noteflix:token')

    setData({})
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
