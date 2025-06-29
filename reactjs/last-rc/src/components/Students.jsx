import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../pages/Card';
const apiUrl = "http://localhost:3000/students"
const Students = () => {
    const [students,setStudents] = useState([]);
    const fetchStudents = async()=>{
        const res = await axios.get(apiUrl);
        setStudents(res.data)
    }
    const [form,setForm] = useState({
        fullname: "",
        address: "",
        gender: "",
        phone: "",
        city :""
    })
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    // create
    const handleSubmit  = async(e)=>{
        e.preventDefault();
        if(form.id){
            await axios.put(`${apiUrl}/${form.id}`,form)
        }else{
            await axios.post(apiUrl, form)
        }
        setForm({
            id:null,
            fullname:"",
            address: "",
            gender: "",
            phone: "",
            city: ""
        })
        fetchStudents();
        
    }

    // update
    const handleUpdate = (student)=>{
        setForm(student)
    }

    // Delete
    const handleDelete = async(id)=>{
        await axios.delete(`${apiUrl}/${id}`)
        fetchStudents()
    }
    useEffect(()=>{
        fetchStudents();
    },[])
  return (
    <div className='max-w-4xl m-auto max-auto p-4'>
        <Card />
        <br />
        <h1 className='text-center text-bold text-blue-600 text-3xl'>Student Management ("CRUD")</h1>
        {/* Form */}
        <form onSubmit={handleSubmit} className='gap-3 p-4 m-auto justify-center  w-full  '>
            <input type="text" placeholder='fullName' name="fullname" value={form.fullname} onChange={handleChange} required className='border border-gray-200 w-96 p-2 py-2 outline-none' />
            <input type="text" placeholder='address' name="address" value={form.address} onChange={handleChange} required className='border border-gray-200 w-96 p-2 py-2 outline-none ml-12' />
            <input type="text" placeholder='city' name="city" value={form.city} onChange={handleChange} required className='border border-gray-200 w-96 p-2 py-2 outline-none ' />
            <input type="text" placeholder='phone' name="phone" value={form.phone} onChange={handleChange} required className='border border-gray-200 w-96 p-2 py-2 outline-none ml-12 mt-8' />
            {/* <input type="text" placeholder='fullName' name="fullname" value={form.fullname} onChange={handleChange} required className='border border-gray-200 w-96 p-2 py-2 outline-none' /> */}
            <select name="gender" value={form.gender} onChange={handleChange} className='border border-gray-200 w-full mt-4 p-2 py-2 outline-none'>
                <option value="">choose your Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <button type='submit' className='bg-blue-600 mt-8 text-white font-bold rounded px-4 py-2 w-full'>Add a Student</button>
        </form>
            {/* Table */}
            <table className='min-w-full m-auto justify-center  border border-gray-200'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-200 p-2'>Full Name</th>
                        <th className='border border-gray-200 p-2'>Address</th>
                        <th className='border border-gray-200 p-2'>Gender</th>
                        <th className='border border-gray-200 p-2'>Phone</th>
                        <th className='border border-gray-200 p-2'>City</th>
                        <th className='border border-gray-200 p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className='border border-gray-200 p-2'>{student.fullname}</td>
                            <td className='border border-gray-200 p-2'>{student.address}</td>
                            <td className='border border-gray-200 p-2'>{student.gender}</td>
                            <td className='border border-gray-200 p-2'>{student.phone}</td>
                            <td className='border border-gray-200 p-2'>{student.city}</td>
                            <td className='border border-gray-200 p-2'>
                                <button onClick={() => handleUpdate(student)} className='bg-yellow-500 text-white px-2 py-1 rounded'>Edit</button>
                                <button onClick={() => handleDelete(student.id)} className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>    
    </div>
  )
}

export default Students