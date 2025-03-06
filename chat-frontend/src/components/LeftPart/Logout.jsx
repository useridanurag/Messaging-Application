import React, { useState } from 'react'
import { HiOutlineLogout } from "react-icons/hi";
import Cookies from "js-cookie"
import axios from "axios"

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
  
  }
  return <button className='flex text-xl font-semibold hover:bg-gray-600 m-2 p-2 ml-auto rounded-lg border-2 border-gray-600' onClick={handleLogout}>
    <p>logout</p>
    <HiOutlineLogout className='mt-[0.39rem] ml-4' />
  </button>
}

export default Logout