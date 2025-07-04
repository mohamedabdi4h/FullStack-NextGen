import express from 'express';
const app = express();
const portNumber = 4000;

app.get('/',(req,res)=>{
    res.json({
        message: "welcome to the backend server"
    })
})


app.listen(portNumber,()=>{
    console.log(`http://localhost:${portNumber}`)
})