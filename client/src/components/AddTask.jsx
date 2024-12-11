import axios from "axios";
import { useState } from "react";

function AddTask() {
    const [task, setTask] = useState("");
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const addedTask = await axios.post("http://localhost:4006/task/addTask", {task}, config);
            setTask("");
        }catch(error){
            console.error("Unable to add task",error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input 
                id="task"
                name="task"
                placeholder="Add task here"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                type="text">
                </input>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;