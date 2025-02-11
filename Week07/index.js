
const express = require("express");
const {UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET ="123abcde";

mongoose.connect("mongodb+srv://inet.utkarsh:O8335BlhFFHfT5uE@Cluster0.sq4gd.mongodb.net/todo-utkarsh");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){ 

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    UserModel.create({
        email: "ukarsh@gmail.com",
        password: "123",
        name: "utkarsh"
        
       
    })

    res.json({
        message: "You are logged in"
    })

})

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.lo(user);

    if(user){
        const token = jwt.sign({
            id: user_id
        })
        res.json({


        })
    }else{
        res.status(403).json({
            message: " Incorrect"
        })
    }



})


app.post("/todo", function(req,res){
    
})

app.get("/todos", function(req,res){
    
})


app.listen(3000);
