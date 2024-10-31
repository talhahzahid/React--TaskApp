import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Firebase/Firebaseconfig';
const Register = () => {

  const [data, setData] = useState([])

  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()

  const registerUser = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/home')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    email.current.value = ''
    password.current.value = ''
  }

  return (
    <>
      <div className='flex justify-center items-center h-[90vh]'>
        <div className='bg-base rounded-lg shadow-lg p-10 w-full max-w-xs'>
          <h1 className='text-center text-xl mb-3'>Register</h1>
          <form onSubmit={registerUser} className='space-y-4'>
            <input type="text" className='border border-black w-full p-2' ref={email} />
            <input type="text" className='border border-black w-full p-2' ref={password} /> <br />
            <button type="submit" className='btn btn-primary w-full'>Register</button>
          </form> <br />
          <div className='flex justify-center'>
            <Link className='m-3' to='/login'>Already have an account </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register