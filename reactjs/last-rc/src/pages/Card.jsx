import React, { useEffect, useState } from 'react'
import axios from 'axios'
const  apiUrl = "http://localhost:3000/students"
const Card = () => {
    const [total,setTotal] = useState([])
    const fetchAllStudents = async()=>{
        const res = await axios.get(apiUrl)
        setTotal(res.data)
    }
useEffect(()=>{
    fetchAllStudents();
},[])
  return (
    <div>
        <div className="card border rounded-2xl bg-blue-400 text-white font-bold capitalize border-gray-200 shadow-md shadow-gray-300 w-[250px] p-8">
            <h1>total students</h1>
            <button>{total.length}</button>
        </div>
    </div>
  )
}

export default Card