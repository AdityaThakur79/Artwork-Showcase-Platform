import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';
// below is the authContext
const AuthContext = createContext()

// below we are creating authprovider inside there will be the state so that can be accessed from anywhere
const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })


    // below method for sending the authorization by default har axios request mein authorization jaayega
    axios.defaults.headers.common['Authorization'] = auth?.token


    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parsedData.user,
                token: parsedData.token
            })
        }
        // eslint-disable-next-line
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)
// creating the custom hook so that can be used anywhere
export { useAuth, AuthProvider }
