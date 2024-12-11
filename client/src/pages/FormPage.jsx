import AddTask from "../components/AddTask";
import Navbar from "../components/Navbar";

function FromPage() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1>Create Your Task</h1>
            <AddTask/>
        </div>
    );
}

export default FromPage;