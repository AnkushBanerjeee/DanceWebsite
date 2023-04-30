const express=require("express"); 
const path=require("path"); 
const app=express(); 
const port=70; 

//EXPRESS SPECIFIC CONFIG 
app.use('/static',express.static('static'))
app.use(express.urlencoded()) 

//pug SPECIFIC CONFIG 
app.set('views engine','pug') //set the template engine as pug 
app.set('views',path.join(__dirname,'views')) //set the views directory 
 
//END POINTS
 app.get('/',(req,res)=>{
    res.status(200).render('Home.pug'); 
 }) 
 app.get('/Home',(req,res)=>{
   res.status(200).render('Home.pug'); 
}) 
 app.get('/about',(req,res)=>{
   res.status(200).render('about.pug'); 
}) 
 app.get('/Contact',(req,res)=>{
   res.status(200).render('Contact.pug'); 
})   
app.get('/address',(req,res)=>{
   res.status(200).render('address.pug'); 
})  

 app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`); 
 })  
 