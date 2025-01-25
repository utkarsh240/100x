const express = require("express");
const fs = require("fs");


const app = express(); 


app.get("/sum",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
})


app.get("/multiply",function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
})


// dynamic routing

app.get("/sum1/:c/:d",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
})


app.listen(3000);