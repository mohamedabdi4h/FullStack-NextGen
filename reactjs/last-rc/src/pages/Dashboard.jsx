import React from 'react'
import {BrowserRouter, useNavigate} from 'react-router-dom';
import Students from '../components/Students';
import {BrowserRouter as Routes,Router,Route} from 'react-router-dom'
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = async()=>{
    localStorage.removeItem("user")
    navigate('/')
  }
  return (
    <>
    <div className="header flex justify-between items-center bg-blue-600 p-4 text-white">
        <div className="logo">Codex</div>
        <div className="btn-logout gap-4 flex items-center ">
          <p className='text-white font-bold -ml-4'>Welcome {user?.username}!</p>
          <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2 rounded' type='submit'>Logout</button>
        </div>
      </div>
      <Students />
      </>
  )
}

export default Dashboard