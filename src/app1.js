const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");


const templatepath=path.join(__dirname,'../templates/views') 
const partialpath=path.join(__dirname,'../templates/partials') 




//TO SET THE VIEW ENGINE file name
app.set("view engine", "hbs");
app.set('views',templatepath);
hbs.registerPartials(partialpath)

app.get("", (req, res) => {
  res.render("index", {
    cssfloat: "Social Media",
  });
});

app.get('/about',(req,res)=>{
  res.render("about");
})

app.get('/learn',(req,res)=>{
  res.render('learn')
})


//FOR MORE DETAILED ERROR HANDLING
app.get('/learn/*',(req,res)=>{
  res.render('404',{
    ErrorStatement:'404 inside learn  page not found'
  })
})

app.get('/about/*',(req,res)=>{
  res.render('404',{
    ErrorStatement:'404 inside about  page not found'
  })
})


app.get('*',(req,res)=>{
  res.render('404',{
    ErrorStatement:'404 page not found'
  })
})


app.listen(7000, () => {
  console.log("the port is listening at 7000");
});
