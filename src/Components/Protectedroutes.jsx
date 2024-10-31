


import React  from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config/Firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
const Protectedroutes = ({component}) => {
  
    const [isUser, setIsUser] = useState(false);
    // use navigate 
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true)
                return
            }
            navigate('/')
        })
    }, [])
   
    return (
      setIsUser ? component : <h1>Loading...</h1>
  )
}

export default Protectedroutes