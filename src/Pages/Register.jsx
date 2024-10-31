import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div className='flex justify-center items-center h-[90vh]'>
    <div className='bg-base rounded-lg shadow-lg p-10 w-full max-w-xs'>
    <h1 className='text-center text-xl mb-3'>Register</h1>
      <form action="" className='space-y-4'>
        <input type="text" className='border border-black w-full p-2' />
        <input type="text" className='border border-black w-full p-2' /> <br />
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