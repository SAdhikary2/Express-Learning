const express=require('express')
const app=express();
const port=3000;
const path=require('path');

console.log(__dirname);



const  staticpath=path.join(__dirname,"../public")



app.use(express.static(staticpath));

// app.get('/',(req,res)=>{
//     res.send('Hello World from the Sukalyan Adhikary');

// })

app.get('/about',(req,res)=>{
    res.send('hello world from the about page')
})



app.listen(port,()=>{
    console.log(`listining port at ${port}`);
})