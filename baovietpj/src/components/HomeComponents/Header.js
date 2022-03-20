import React, { useState } from 'react'
import logo_header from '../../stlye/img/logo_header.png'
import './Header.css';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { BiDownArrow } from 'react-icons/bi'

function Header() {
    const profileicon = {
        color: "white", fontSize: "1.2em"
    }
    const arrow = {
        color: "white", fontSize: ".8em"
    }
    const [checked, setChecked] = useState('dark')
    const handleChange = (event) => {
        setChecked(event.target.value);
    };

    const [lang, setLang] = useState('vie')
    const handleLang = (e) => {
        setLang(e.target.value)
    }

    const [showlist, setShowlist] = useState(false)
    const toggleshowlist = () => {
        if (showlist == false) {
            setShowlist(true)
        } else {
            setShowlist(false)
        }
    }
    const Accountdropdown = () => {
        return (
            <div className='account-dropdownlist'>
                <div className='wrap-pane-setting'>
                    <div className='setting-box'>
                        <div className='wrap-setting'>
                            <h5>Giao diện</h5>
                            <div className='setting-pane'>
                                <div className='setting-option'>
                                    <input type='radio'
                                        name='radio_theme'
                                        value='light'
                                        checked={checked === 'light'}
                                        onChange={handleChange}
                                    />
                                    <span>Sáng</span>
                                </div>
                                <div className='setting-option'>
                                    <input type='radio'
                                        name='radio_theme'
                                        value='dark'
                                        checked={checked === 'dark'}
                                        onChange={handleChange}
                                    />
                                    <span>Tối</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='setting-box'>
                        <div className='wrap-setting'>
                            <h5>Ngôn ngữ</h5>
                            <div className='setting-pane'>
                                <div className='setting-option'>
                                    <input type='radio'
                                        name='radio_lang'
                                        value='vie'
                                        checked={lang === 'vie'}
                                        onChange={handleLang}
                                    />
                                    <span>Tiếng Việt</span>
                                </div>
                                <div className='setting-option'>
                                    <input type='radio'
                                        name='radio_lang'
                                        value='eng'
                                        checked={lang === 'eng'}
                                        onChange={handleLang}
                                    />
                                    <span>Tiếng Anh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <header>
                <div className={checked === 'light' ? 'header__home-light' : 'header__home-dark'}>
                    <img className='logo_header' src={logo_header} />
                    <div className='log-in'>
                        <Link to="/"><button className='log-in-btn'>Đăng xuất</button></Link>
                        <div className='wrapp'>
                            <div className='toggle-info' onClick={toggleshowlist}>
                                <CgProfile style={profileicon} /><BiDownArrow style={arrow} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>  {showlist ? <Accountdropdown /> : ''}</div>
            </header>
        </div>
    )
}

export default Header