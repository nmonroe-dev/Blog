import {Link} from "react-router-dom";


function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/formPage">Add Task</Link></li>
                <li><Link to="/loginPage">Login/Signup</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;