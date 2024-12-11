const Task = require("../models/Task");


exports.getTask = async (req, res) => {
    try{
        const allTask = await Task.findOne({user: req.user.id});
        if(!allTask){
            return res.status(404).json({message: "No Task Found Try Adding Some"})
        }
        res.status(200).json(allTask);
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
}


exports.addTask = async (req, res) => {
    const {task} = req.body;
    if(!task){
        return res.status(400).json({message: "Task required"});
    }
    try{
        const newTask = await Task.create({task, user: req.user.id});
        res.status(201).json({message: "Task has been Added"});
    }catch(error){
        res.status(500).json({message: "Server Error", error});
    }
}

