const express = require("express");
const taskController = require("../controllers/taskControllers");
const route = express.Router();


route.get("/getTask", taskController.getTask);
route.post("/addTask", taskController.addTask);

module.exports = route;
