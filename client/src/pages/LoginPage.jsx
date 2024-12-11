import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

function LoginPage() {
    return (
        <div>
            <Navbar/>
            <div>
                <h1>Login Here</h1>
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;
