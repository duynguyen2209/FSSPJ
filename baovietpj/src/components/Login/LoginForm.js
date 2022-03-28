import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchLang } from '../../Redux/Actions/action';
import { useTranslation } from 'react-i18next';

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

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const langMode = useSelector((state) => state.Lang.langis)
    const [lang, setLang] = useState(langMode)
    const handleLang = (e) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
        dispatch(SwitchLang(
            e.target.value
        ))
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className='form-inner'>
                    <Link to="/Home" className='home-page'>
                        <div className='img-logo'>
                        </div>
                    </Link>
                    <h2>{t('login.header_login')}</h2>
                    <div className='form-group'>
                        <label htmlFor="usernumber">{t('login.header_username')}:</label>
                        <br />
                        <input
                            className='btn-inp'
                            placeholder={t('login.account_input')}
                            ref={accountinput}
                            type="text"
                            name="usernumber"
                            id="usernumber"
                            required
                            onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                            value={details.usernumber}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"> {t('login.header_password')}</label>
                        <br />
                        <input
                            className='btn-inp'
                            placeholder= {t('login.password_input')}
                            type="password"
                            name="password"
                            id="password"
                            required
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}></input>
                    </div>
                    {(error != "") ? (<div className='error'>{t('login.error_login')} !<br />{t('login.try_again')}.</div>) : ""}
                    <input
                        className='btn-inp'
                        type="submit"
                        value={t('login.btn_login')}
                    ></input>
                    <div className='login-flex'>
                        <div ><a href='#' className='login-text'>{t('login.open_account')}</a></div>
                        <div ><a href='#' className='login-text'>{t('login.forgot_pass')} ?</a></div>
                    </div>
                    <div className='login-flex'>
                        <div className='wrap-lang'>
                            <input
                                type='radio'
                                id='Vietnam'
                                onChange={handleLang}
                                value='vie'
                                className='lang-radio-btn'
                                checked={lang === 'vie'}
                                name='radio-lang' />
                            <label htmlFor="Vietnam" className='lang-text'>{t('login.radio_vie')}</label>
                        </div>
                        <div className='wrap-lang'>
                            <input
                                type='radio'
                                id='English'
                                onChange={handleLang}
                                value='eng'
                                className='lang-radio-btn'
                                checked={lang === 'eng'}
                                name='radio-lang' />
                            <label htmlFor="English" className='lang-text'>{t('login.radio_eng')}</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm