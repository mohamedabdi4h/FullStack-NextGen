import React, { useEffect, useState } from 'react'

const ListRendering = () => {
const [posts,setPosts] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        if(!response.ok){
            throw new Error('Failed to fetch posts')
        }
        const data = response.json();
        console.log(data)
        return data
    
        .then((data)=>{
            setPosts(data)
            
        })
        .catch((error)=>{
            console.log(error.message)
        })
    })
},[])
  return (
    <div>
       {
        posts.map((post)=>(
            <ul key={post.id} className='shadow-sm bg-gray-950 text-white shadow-gray-200 p-4 m-4 '>
                <li className='bg-white text-black w-6 text-center rounded-full h-6'>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        ))
       }
    </div>
  )
}

export default ListRendering
