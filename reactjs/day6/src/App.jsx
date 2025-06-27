// import React, { useState,useEffect } from 'react'
import React from 'react'
// import ListRendering from './components/ListRendering'
import Photos from './components/Photos'
const App = () => {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(Response =>{
  //     if(!Response.ok){
  //       throw new Error('Fadlan waanu ka xunnahay lama helin xogtaada')
  //     }
  //     return  Response.json()
  //     .then((data)=>{
  //       setTodos(data)
  //     })
  //     .catch((error)=>{
  //       setError(true)
  //       setLoading(true)
  //       setTodos(error)
  //     })
  //   })
  // },[])
  // if(loading){
  //   return <div className='text-center text-blue-600 text-2xl font-bold'>Loading...</div>
  // }
  // if(error){
  //   return <div className='text-center text-red-600 text-2xl font-bold'>{error.message}</div>
  // }
  return (
    <div className='p-12'>
      <h1 className='text-center text-blue-600 text-4xl font-bold'>Todos Data Rendering</h1>
{/* <div className="relative mt-12 m-auto justify-center overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Id
                </th>
                <th scope="col" className="px-6 py-3">
                   Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            todos.map((todo)=>(
               <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500" key={todo.id}>
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   {todo.id}
                </th>
                <td className="px-6 py-4">
                    {todo.title}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-white hover:underline">{todo.completed ? 'True':'False'}</a>
                </td>
            </tr>
            ))
           }
        </tbody>
    </table>
</div> */}
{/* <ListRendering /> */}
<Photos />
    </div>
  )
}

export default App