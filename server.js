const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT ||3000;
var app = express ();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

app.use(express.static(__dirname +"/public"));

app.get('/',(req,res)=>{

res.render('homepage.hbs', {
welcomeMessage:'Hey You! Why are you so awesome at Express?',
currentYear:new Date().getFullYear()

});


})

app.get ('/about',(req,res)=>{

 res.render('about.hbs', {
  pageTitle:'About Page',
  currentYear:new Date().getFullYear()

 });


})

app.get('/bad', (req,res)=>{

  res.send({

    error:'This was a bad request'

  });

});

app.listen(port,() =>{
console.log(`Server is up on port : ${port}`);

});
