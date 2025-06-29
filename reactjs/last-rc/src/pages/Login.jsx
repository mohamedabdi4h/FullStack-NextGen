import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const apiUrl = "http://localhost:3000/users"
import loginImage from '../../public/loginImage.png'
const Login = () => {
     const [form,setForm] = useState({
        username:'',
        password: ''
     })
     const navigate = useNavigate();
     const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
     }
     const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.get(apiUrl,{
                params:{
                    username: form.username , 
                    password: form.password
                }
            })
            if(res.data.length>0){
                localStorage.setItem("user",JSON.stringify(res.data[0]));
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("sorry there are a Error")
        }
     }
  return (
    <div className='flex h-screen justify-center items-center bg-gray-100'>
        <div className="flex flex-row-reverse gap-44 justify-between items-center">
            <div className="form">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
            <input type="text" placeholder='username or email' name='username' value={form.username} onChange={handleChange} className='border w-full p-2 border-gray-200 rounded outline-blue-600 transition-all ease-in-out duration-200' />
            <input type="password" placeholder='*************' name='password' value={form.password} onChange={handleChange} className='border w-full p-2 border-gray-200 mt-2 rounded outline-blue-600 transition-all ease-in-out duration-200' /> <br />
            <button className='w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-800 transition-all cursor-pointer  mt-2'>Login</button>
        </form>
            </div>
            <div className="image">
                <img src={loginImage} className='size-88 w-full'  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login