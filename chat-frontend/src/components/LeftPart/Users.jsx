import React, { useEffect } from 'react'
import STATUS from "../../redux/status"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../../redux/features/fetchUsersSlice"
import User from './User'
import '../../Global.css'


const Users = () => {
  const dispatch = useDispatch();
  const { status, users } = useSelector((state) => state.getUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === STATUS.LOADING) {
    return <p>Loading...</p>
  }
  else if (status === STATUS.ERROR) {
    return <p>Error: Users Can't be fetched...</p>
  }

  return (
    <div className='border-b border-gray-300'>
      <p className='mx-5 mt-3 font-semibold text-xl'>Messages</p>

      <div className='hideScrollable h-[72vh] overflow-y-auto '>

        {
          users.map((user) => (<User key={user._id} user={user} />))
        }
      </div>
    </div>
  )
}

export default Users