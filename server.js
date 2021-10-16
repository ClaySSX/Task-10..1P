const express = require("express");
const bodyParser = require("body-parser");
const Task = require("./models/Task")
const app = express();
const mongoose = require("mongoose")
const path = require('path');
const e = require("express");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://clay-admin:Moshpit1@cluster0.usdlt.mongodb.net/iServiceDB", {useNewUrlParser:true})

  app.get('/',(req, res)=>{
    const task ={
      taskType:"online",
      tTitle:"Creating API",
      description: "Creating secure api",
      suburb:"Geelong",
      date:"20/10/2021"
    }
    res.send(task)
  })
  
  app.post('/Task',(req,res)=>{
    const task = new Task({
      taskType: req.body.taskType,
      tTitle: req.body.tTitle,
      description: req.body.description,  
      suburb: req.body.suburb,
      date: req.body.date,
      budget:req.body.budget,
      price: req.body.price,
      
    });
    task.save()
    .catch((err)=> console.log(err));
    res.json(('saved to db:' + task));
  })

  app.listen(8080, function(){
    console.log("server is running on port 8080")
  });