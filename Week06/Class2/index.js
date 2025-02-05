const express = require("express");
const jwt =  require ("jsonwebtoken");
const JWT_SECRET = "Utkarsh123";


const app = express();
app.use(express.json());


const users=[];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You signed in"
    })

})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i =0; i<users.length;i++){
        if(users[i].username == username && users[i].password== password){
            foundUser = users[i];
        }
    }

    if(!foundUser){
        res.json({
            message: "credentials incorrect"
        })
        return
    }else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        
        res.json({
            token: token
        })
    }
    
})

app.post("/todos", function(req,res){

    
})

app.listen(3000);