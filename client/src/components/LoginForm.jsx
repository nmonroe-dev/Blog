import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LoginForm () {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:4006/auth/login/", {username, password});
            localStorage.setItem("token", response.data.token);
            setPassword("");
            setUsername("");
            nav("/home");

        }catch(error){
            console.error("Unable to login", error);
        }
    };
    return (
        <div>
            
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">User:</label>
                    <input
                     type="text"
                     placeholder="username"
                     value={username}
                     id="username"
                     name="username"
                     onChange={(event) => setUsername(event.target.value)}
                     ></input>
                     <label htmlFor="password">Password:</label>
                     <input
                     type="password"
                     placeholder="Password"
                     id="password"
                     value={password}
                     name="password"
                     onChange={(event) => setPassword(event.target.value)}
                     ></input>
                     <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;