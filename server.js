const express=require('express');
const app=express();
const cors = require('cors');

app.use(cors());

app.get("/",(req,res)=>{
    res.json({name: "Code Bless You",Subscript:true})
});

app.listen(5000,()=>console.log("server is listening on 5000"));