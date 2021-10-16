const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        taskType: String,
        tTitle: String,
        description: String,
        date:  String,
        suburb: String,
        budget: String,
        price: String,
        
    }
)

module.exports  =  mongoose.model("Task", taskSchema)