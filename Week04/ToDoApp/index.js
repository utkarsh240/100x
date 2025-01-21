const express = require("express");
const app = express();

var users = [{
  name : "utkarsh",
  kidneys: [{
    healthy:false
    
  }]
}];

app.use(express.json());

app.get("/", function(req,res){
  // logic
  const johnkidneys = users[0].kidneys;
  console.log(johnkidneys);
  const numberofkidney = johnkidneys.length;
  let numberofhealthykidneys=0;
  for(let i =0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
      numberofhealthykidneys= numberofhealthykidneys+1;
    }
  }
  const numberofunhealthy= numberofkidney- numberofhealthykidneys;
  res.json({
    numberofkidney,
    numberofhealthykidneys,
    numberofunhealthy
  })
})


// middlewares
app.post("/", function(req,res){


  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy : isHealthy
  })
  res.json({
    msg: "Done!"
  })
   
})

app.put("/",function(req,res){
  for(let i =0; i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy= true;
  }
  res.json({});
})
app.listen(3000);