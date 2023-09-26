const express=require('express');
const app=express();
const hbs=require('hbs');
const path =require ('path')

const statepath=path.join(__dirname,'../public');

app.use(express.static(statepath))



//TO SET THE VIEW ENGINE file name
// app.set('view engine','hbs');
// app.set("views",templatepath)
// hbs.registerPartial(partialpath)

// app.get('',(req,res)=>{
//     res.render('index',{
//         cssfloat:'Social Media'




//     })
// })




// app.get('/about',(req,res)=>{
//     res.send('This is the about page')
// })
app.get('/contact',(req,res)=>{
    res.send('This is the conjtact page')
})







//SET DEFAULT ERROR PAGE
// app.get('*',(req,res)=>{
//     res.send('<h1>502 Bad request server not found</h1>')
// })
// app.listen(process.env.PORT | 3300,()=>{console.log(process.env.PORT)})
 


app.listen(7000,()=>{
    console.log('the port is listening at 7000');
})










