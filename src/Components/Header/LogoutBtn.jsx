import React from "react";
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch()

    const lougoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 text-white duration-200 hover:bg-blue-100 hover:text-black rounded-full'
    onClick={lougoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn