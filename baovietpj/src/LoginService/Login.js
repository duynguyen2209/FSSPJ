import { useState } from 'react';
import LoginForm from './LoginForm';
import { users } from '../Datafile/Userdata';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
    const navigate = useNavigate();
    const handledStory = () => {
        navigate('/Home')
    }

    const [error, setError] = useState("");

    function Login(details) {
        const checkuser = users.find(user => (user.usernumber === details.usernumber && user.password === details.password));
        if (checkuser) {
            console.log("Logged in");
            handledStory();
        } else {
            console.log("Logged fail");
            setError("Fail")
        }
    }

    return (
        <div className="Login" >
            < LoginForm Login={Login} error={error} />
        </div>
    );
}

export default Login;