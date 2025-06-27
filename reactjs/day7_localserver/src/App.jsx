import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [students,setStudents] = useState([]);

  const fetchStudents = async()=>{
    const response = await axios.get('http://localhost:3000/students')
    setStudents(response.data)
  }

useEffect(()=>{
  fetchStudents();
},[]);

  return (
    <div>
      <h1>Fetch All Data Students from Server.</h1>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <th>Id</th>
          <th>FullName</th>
          <th>Email</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Address</th>
          <th>City</th>
          <th>Image</th>
        </thead>
        <tbody>
          {
            students.map((student)=>(
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullname}</td>
                <td>{student.email}</td>
                <td>{student.sex}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>{student.city}</td>
                <td>
                  <img src={student.image} style={{width:50, borderRadius:100,height:50}} alt="" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App