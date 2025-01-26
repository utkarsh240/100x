const express = require("express");

const app = express();

let requestcount =0;

function requestInc(req,res,next){
    requestcount = requestcount+1;
    console.log(requestcount);
    next();
}

function SumHAndler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b;
    })
}



app.get("/sum",function(requestInc,SumHAndler));
// sum

app.listen(3000);