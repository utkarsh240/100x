const express = require ('express');
const app = express();

// function that return a boolean


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg: " Sorry for your age",
        })
    }
}

app.get("/ride2", isOldEnoughMiddleware, function(req,res){
        res.json({
            msg: "success for R2",
        });
    
    });


app.get("/ride1", isOldEnoughMiddleware, function(req,res){
        res.json({
            msg: "success for R1",
        });
    
});




app.listen(3001);