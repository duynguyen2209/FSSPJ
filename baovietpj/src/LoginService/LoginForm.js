import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ usernumber: "001C", password: "" });
    const accountinput = useRef(null);
    useEffect(() => {
        accountinput.current.focus();
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className='form-inner'>
                    <Link to="/Home" className='home-page'>
                        <div className='img-logo'>
                        </div>
                    </Link>
                    <h2>Đăng nhập</h2>
                    <div className='form-group'>
                        <label htmlFor="usernumber">Tên đăng nhập:</label>
                        <br />
                        <input
                            className='btn-inp'
                            placeholder='Tài khoản'
                            ref={accountinput}
                            type="text" 
                            name="usernumber" 
                            id="usernumber"
                            required
                            onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                            value={details.usernumber}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Mật khẩu:</label>
                        <br />
                        <input
                            className='btn-inp'
                            placeholder='Mật khẩu'
                            type="password" 
                            name="password"
                            id="password"
                            required
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}></input>
                    </div>
                    {(error != "") ? (<div className='error'>Tài khoản hoặc mật khẩu không đúng!<br />Vui lòng thử lại.</div>) : ""}
                    <input
                        className='btn-inp'
                        type="submit"
                        value="Đăng nhập"
                    ></input>
                    <div className='login-flex'>
                        <div ><a href='#' className='login-text'>Mở tài khoản</a></div>
                        <div ><a href='#' className='login-text'>Quên mật khẩu ?</a></div>
                    </div>
                    <div className='login-flex'>
                        <div className='lang'>Tiếng việt</div>
                        <div className='lang'>Tiếng anh</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm