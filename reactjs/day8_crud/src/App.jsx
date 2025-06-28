import axios from 'axios';
import React,{useState,useEffect} from 'react'
const apiUrl = "http://localhost:3000/students";
const App = () => {
  const [students,setStudents] = useState([]);
  const [error,setError] = useState(true)
  const [form,setForm]= useState({
    fullname: "",
    address: "",
    city: "",
    gender: "",
    phone: ""
  })

  const fetchStudents = async()=>{
    const res = await axios.get(apiUrl)
    setStudents(res.data)
  };
// create a new Student
const handleChange = (e)=>{
setForm({...form, [e.target.name] : e.target.value})
};
const handleSubmit = async(e)=>{
  e.preventDefault();
  await axios.post(apiUrl,form)
  // setForm({fullname:"",})
  fetchStudents();
}
  useEffect(()=>{
    fetchStudents();
    setError(false)
  },[]);

let  getCurrentYear = new Date().getFullYear();
  return (
    <div>
      <h1 className="text-center text-blue-600 text-6xl mt-12">Students Application "CRUD"</h1>
      <form onSubmit={handleSubmit} className='grid border border-gray-200 p-4 w-[1200px] mt-12 m-auto justify-center grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <input type="text"className='border p-2 w-[500px] border-gray-200'name='fullname' placeholder='FullName' value={form.fullname} onChange={handleChange} required />
        <input type="text"className='border p-2 w-[500px] border-gray-200'name='address' placeholder='Address' value={form.address} onChange={handleChange} required />
        <input type="text"className='border p-2 w-[500px] border-gray-200'name='phone' placeholder='Phone' value={form.phone} onChange={handleChange} required />
        <input type="text"className='border p-2 w-[500px] border-gray-200'name='city' placeholder='City' value={form.city} onChange={handleChange} required />
        <select name="gender" value={form.gender} onChange={handleChange} className='border p-2 border-gray-200' id="">
          <option value="">choose your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all  '>Add</button>
      </form>

      {/* Render Data to table */}
      <table className='w-[95%] m-auto table-auto border-collapse border border-gray-300 mt-8'>
      <thead>
        <tr className='bg-gray-200'>
          <th>#</th>
          <th className='border p-2' >FullName</th>
          <th className='border p-2' >Address</th>
          <th className='border p-2' >Gender</th>
          <th className='border p-2' >Phone</th>
          <th className='border p-2' >City</th>
        </tr>
      </thead>
      <tbody>
        {
          error? <h1 className='text-center text-lg translate-x-80 m-auto justify-center text-red-500 font-semibold'>Fadlan Serverka Hagaaji</h1>:
          students.map((student)=>(
            <tr key={student.id}>
              <td className='border p-2' >{student.id}</td>
              <td className='border p-2' >{student.fullname}</td>
              <td className='border p-2' >{student.address}</td>
              <td className='border p-2' >{student.gender}</td>
              <td className='border p-2' >{student.phone}</td>
              <td className='border p-2' >{student.city}</td>
            </tr>
          ))
        }
      </tbody>
      </table>
      <div className="footer flex justify-between p-4 mt-2  bg-gray-200">
        <div className="year">{getCurrentYear}</div>
        <div className="dev">poweredby: Students For web Nextgen</div>
        <div className="follow">follow us</div>
      </div>
    </div>
  )
}

export default App