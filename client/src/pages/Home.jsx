import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"


function Home() {
    const [tasks, setTask] = useState([]);
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    };
    useEffect(() => {
        const fetchData = async () => {
            try{
                const respones = await axios.get("http://localhost:4006/task/getTask/", config);
                console.log(respones.data);

                setTask([respones.data]);
            }catch(error){
                console.error("Unable to fetch task", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <Navbar/>
            <div>
                <h1>Conquer Your To-Do List</h1>
                <ul>
                    {tasks.map((task) =>
                    <li key={task._id}>{task.task}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Home;