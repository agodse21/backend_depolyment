const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 8080
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello this is home")
})
app.get("/about",(req,res)=>{
    res.send("hello this is about")
})
app.listen(PORT,()=>{
    
    console.log(`Lising on port ${PORT}`)
})