const express = require("express");
const jwt =  require ("jsonwebtoken");
const JWT_SECRET = "Utkarsh123";


const app = express();
app.use(express.json());


const users=[];

function logger(req,res,next){
    console.log(req.method+ " request came");
    next();
}

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html");
})

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

function auth(req,res,next){
    const token = req.headers.token;
    const decoadedData = jwt.verify(token, JWT_SECRET);

    if(decoadedData.username){
        req.username = decoadedData.username;
        next()
    }else{
        res.json({
            message: " Not logged in"
        })
    }

}

app.get("/me", auth, function(req,res){

    let foundUser = null;

    for(let i =0; i< users.length;i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
    }
    res.json({
        username:foundUser.username,
        password: foundUser.password
    })

    
})

app.listen(3000);