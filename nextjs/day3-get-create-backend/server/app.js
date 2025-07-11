import express from 'express';
const app = express();
const port = 3001
import {PrismaClient} from '../app/generated/prisma/client.js';
const prisma = new PrismaClient();
app.use(express.json());

// get all a tasks in the database.
export default async  function getTasks(_,res){
    const getAll = await prisma.tasks.findMany();
    res.json(getAll)
}

// create a new data to database
 async function createTasks(req,res){
    const {title,description} = req.body;
    const newTask = await prisma.tasks.create({
        data:{
            title,
            description
        }
    })
    res.json({
        message:"succesefully a new task."
    })
}

app.get('/all',getTasks);
app.post('/create',createTasks)



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})