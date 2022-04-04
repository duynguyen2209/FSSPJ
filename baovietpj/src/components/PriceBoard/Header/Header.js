import React, { useState, useEffect } from 'react';
import logo_header from '../../../Assetss/img/logo_header.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logoutredux, SwitchTheme, SwitchLang, GetUser, ChangTabName } from '../../../Redux/Actions/action';
import { ImClock } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleDown } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import FlagVN from '../../../Assetss/img/FlagVN.png'
import FlagEN from '../../../Assetss/img/FlagEN.png'
import './Header.scss'

function Header() {
  useEffect(() => {
    document.title = t('title.document_title_home')
  }, [])

  const current = new Date();
  const date = current.toLocaleDateString();
  const [clock, setClock] = useState(current.toLocaleTimeString());
  const UpdateTime = () => {
    const current = new Date();
    const time = current.toLocaleTimeString();
    setClock(time)
  }
  setInterval(UpdateTime, 1000);

  const themeMode = useSelector((state) => state.Theme.themeMode)
  const [checked, setChecked] = useState(themeMode)
  const handleChangeTheme = (event) => {
    setChecked(event.target.value);
    dispatch(SwitchTheme(
      event.target.value
    ))
  };

  const { t, i18n } = useTranslation();
  const langMode = useSelector((state) => state.Lang.langis)
  const [lang, setLang] = useState(langMode)
  const handleLang = (e) => {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    dispatch(SwitchLang(
      e.target.value
    ))
  }

  let userLogout = { usernumber: '', username: '' }
  const dispatch = useDispatch();
  const hadleLogout = () => {
    dispatch(Logoutredux(false))
    dispatch(GetUser(userLogout))
  }

  const [showlist, setShowlist] = useState(false)
  const toggleshowlist = () => {
    if (showlist == false) {
      setShowlist(true)
    } else {
      setShowlist(false)
    }
  }


  const User = useSelector((state) => state.Login.usernumber)
  const UserName = useSelector((state) => state.Login.username)
  const Accountdropdown = () => {
    return (
      <div className='account-dropdownlist'>
        <div className={checked === 'dark' ? 'wrap-pane-setting-dark' : 'wrap-pane-setting-light'}>
          <div className='usernumber'>{t('home.greeting')}: {UserName}</div>
          <div className='usernumber'> ID: {User}</div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>{t('home.theme')}</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_theme'
                    value='light'
                    id='light'
                    checked={checked === 'light'}
                    onChange={handleChangeTheme}
                  />
                  <label htmlFor='light' className='cursor-pointer' >{t('home.light_theme')}</label >
                </div>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_theme'
                    value='dark'
                    id='dark'
                    checked={checked === 'dark'}
                    onChange={handleChangeTheme}
                  />
                  <label htmlFor='dark' className='cursor-pointer'>{t('home.dark_theme')}</label >
                </div>
              </div>
            </div>
          </div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>{t('home.languages')}</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_lang'
                    value='vie'
                    id='Vietnam'
                    checked={lang === 'vie'}
                    onChange={handleLang}
                  />
                  <label htmlFor="Vietnam"><img src={FlagVN} className="img-logo-lang" /></label>
                </div>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_lang'
                    value='eng'
                    id='English'
                    checked={lang === 'eng'}
                    onChange={handleLang}
                  />
                  <label htmlFor="English"><img src={FlagEN} className="img-logo-lang" /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div  className={checked === 'light' ? 'theme-light' : 'theme-dark'}>
      <header>
        <div className='header'>
          <img className='logo_header' src={logo_header} />
          <div className='date-clock'>
            <ImClock className="clock-icon" />
            <span>&nbsp;</span>
            <span>{date}</span>
            <span>&nbsp;</span>
            <span >{clock}</span>
          </div>
          <marquee className='moving-band' >
            <p className='marquee-header'>
              <span className='marquee-item'>{t('marquee.GTTT')}: </span>
              <span className='marquee-item'>141.25 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGDTT')}: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>14534.999 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLTT_GT')}: </span>
              <span className='marquee-item'>111.242.555 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLTT')}: </span>
              <span className='marquee-item'>111.242.555 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.VLGT')}:</span>
              <span className='marquee-item'>104.202.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLTT_GT')}: </span>
              <span className='marquee-item'>232.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>123.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>1.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.VLGT')}:</span>
              <span className='marquee-item'>104.202.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLTT_GT')}: </span>
              <span className='marquee-item'>141.25 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>{t('marquee.KLTT')}: </span>
              <span className='marquee-item'>14534.999 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>104.202.002 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLGD')}: </span>
              <span className='marquee-item'>141.25 {t('marquee.billion')}</span>
              <span className='marquee-item'>{t('marquee.KLTT_GT')}: </span>
              <span className='marquee-item'>16.702</span>
            </p>
          </marquee>
          <div className='logout'>
            <Link to='/'><button className='logout-btn' onClick={hadleLogout}>{t('home.btn_logout')}</button></Link>
            <div className='wrap ' onClick={toggleshowlist} >
              <button className='toggle-info'>
                <span className='blue-hover'> <CgProfile className='info-icon' /><VscTriangleDown className='info-icon-arrow' /></span>
              </button>
            </div>
          </div>
        </div>
        <div >  {showlist ? <Accountdropdown /> : ''}</div>
      </header>

    </div>
  )
}

export default Header