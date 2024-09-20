import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Config'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispach = useDispatch()
  const logoutHandler = () =>{}
  authService.logout().then(()=>{
    dispach(logout())
  })
  return (
    <button className='lnline-block px-6 py-2 duration-200
     hover:bg-blue-200 rounded-full' onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
