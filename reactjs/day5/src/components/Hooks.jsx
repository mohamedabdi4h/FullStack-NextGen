import React,{useState} from 'react'

const Hooks= () => {
  const [count,setCount] = useState(997)
  const [message,setMessage] = useState("")
  return (
    <div>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button>{count}</button> <br />

     <p>I am {message}</p>
     <button onClick={()=>setMessage("a React Developer..")}>click</button>

    </div>
  )
}

export default Hooks