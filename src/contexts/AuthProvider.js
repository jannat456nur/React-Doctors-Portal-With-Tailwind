import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoding] = useState(true)
  //create user function
  const createUser = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in function
  const signIn = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //update profile
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }
  //sogn out
  const logOut = () => {
    setLoding(true)
    return signOut(auth)
  }
  //state for user observation user sign in or new user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log('user observing')
      setUser(createUser)
      setLoding(false)
    })
    return () => unsubscribe()
  }, [])
  //provide props for using  contexts globally
  const authInfo = {
    createUser,
    signIn,
    logOut,
    updateUser,
    user,
    loading,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
