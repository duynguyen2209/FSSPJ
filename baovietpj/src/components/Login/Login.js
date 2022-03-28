import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { Check_Login } from '../../ServiceAPI/UserService'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Loginredux } from '../../Redux/Actions/action'
import { useTranslation } from 'react-i18next';
import { GetUser } from '../../Redux/Actions/action';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/Home')
    }
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    function Login(details) {
        const checkuser = Check_Login(details.usernumber, details.password);
        if (checkuser) {
            toHome();
            let dataUser = { usernumber: checkuser.usernumber, username: checkuser.name }
            dispatch(Loginredux(true))
            dispatch(GetUser(dataUser))

        } else {
            setError("Fail")
        }
    }
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.title = t('title.document_title_login')
    }, [])

    return (
        <div className="Login" >
            < LoginForm Login={Login} error={error} />
        </div>
    );
}

export default Login;