const express = require("express");

const app = express();

app.use(express.json());

const users=[];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
         'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
         'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


app.post("/signup", function(req,res){

    const username = req.body.username;
    const password = req.body.password;

//    if(users.find(u=>u.username === username)){
//     res.json({
//         message: "already exist"
//     })
//     return
//    }

    users.push({
        username: username, 
        password: password
    })

    res.json({
        message: "Signed in"
    })

})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    // const user = users.find (function(u) {
    //     if (u.username== username && u.password== password){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // })

    let founduser = null;

    for(let i =0; i<users.length;i++){
        if(users[i].username == username && users[i].password == password){
            founduser = users[i];
        }
    }

    if(founduser){
        const token = generateToken();
        founduser.token = token;
        res.json({
            token:token
        })
        }else{
            res.status(403).send({
                message: "invalid user or password"
            });
    }
    console.log(users);
})

app.listen(3000);