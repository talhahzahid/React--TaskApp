import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const email = useRef()
    const password = useRef()
    return (
        <>
            {/* <h2>Login</h2> */}
            <div className='flex items-center justify-center h-[90vh]'>
                <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-xs'>
                    <h1 className='text-center text-xl mb-3 font-semibold'>Login</h1>
                    <form onSubmit={Login} className='space-y-7'>
                        <input type="text" placeholder='Enter Task' className='w-full border  border-black p-2' ref={email} />
                        <input type="text" placeholder='Enter Task' className='w-full border  border-black p-2' ref={password} /> <br />
                        <button type="submit" className='w-full btn btn-primary'>Login</button>
                    </form>  <br />
                    <div className='flex justify-center'>
                        <Link className='m-3' to='/register'>Create a new account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login