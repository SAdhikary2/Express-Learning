const express=require('express')
const app=express();
const port=3000;

// PAGE ROUTING
app.get('/',(req,res)=>{
//     res.send([
//         {
//         id:1,
//         name:'Sukalyan Adhikary'
//     },
//     {
//         id:1,
//         name:'Sukalyan Adhikary'
//     },
//     {
//         id:1,
//         name:'Sukalyan Adhikary'
//     }
// ])



//SENDING JSON DATA TO THE BROWSER
res.json(
    {
    id:1,
    name:'Sukalyan Adhikary',
    department:'BCA'
}
)



});

app.get('/about',(req,res)=>{
    res.send(`<h1>Hello from the About Page</h1>`)
})

app.get('/contact',(req,res)=>{

    //for multiple response in webpage
res.write('Another response for the conatct page');

    res.write('<h1>Hello from the contact  Page</h1>');
    res.send();
})

app.get('/temp',(req,res)=>{
    res.status(200).send(`<h1>Hello from the contact  Page</h1>`)
})




//SERVER LISTINING
app.listen(port,()=>{
    console.log(`server listining at ${port}`);
});

