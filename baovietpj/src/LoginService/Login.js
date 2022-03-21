import { useState } from 'react';
import LoginForm from './LoginForm';
import { users } from '../Datafile/Userdata';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux' ;
import {Loginredux} from '../Redux/Actions/action'
import './Login.css';
function Login() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/Home')
    }
    const dispatch = useDispatch();

    const [error, setError] = useState("");
    function Login(details) {
        const checkuser = users.find(user => (user.usernumber === details.usernumber && user.password === details.password));
        if (checkuser) {
            toHome();
            dispatch(
                Loginredux(true)
            ) 
        } else {
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