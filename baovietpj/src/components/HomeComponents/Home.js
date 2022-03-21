import React, { useState, useEffect } from 'react'
import logo_header from '../../stlye/img/logo_header.png'
import '../HomeComponents/assets/Home.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logoutredux, SwitchTheme, SwitchLang, GetUser } from '../../Redux/Actions/action';
import { ImClock } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { BiDownArrow } from 'react-icons/bi';
import home_img from '../../stlye/img/home_img.png'
import home_img_light from '../../stlye/img/home_img_light.png'


function Home() {
  useEffect(() => {
    document.title = "Bảng giá BVSC"
  }, [])
  const clock = {
    color: "white", fontSize: "1.2rem"
  }
  const profileicon = {
    color: "white", fontSize: "1.2em"
  }
  const arrow = {
    color: "white", fontSize: ".8em"
  }
  const current = new Date();
  const date = current.toLocaleDateString();
  const time = current.toLocaleTimeString();

  const themeMode = useSelector((state) => state.Theme.themeMode)
  const [checked, setChecked] = useState(themeMode)
  const handleChangeTheme = (event) => {
    setChecked(event.target.value);
    dispatch(SwitchTheme(
      event.target.value
    ))
  };

  const langMode = useSelector((state) => state.Lang.langis)
  const [lang, setLang] = useState(langMode)
  const handleLang = (e) => {
    setLang(e.target.value)
    dispatch(SwitchLang(
      e.target.value
    ))
  }

  const dispatch = useDispatch();
  const hadleLogout = () => {
    dispatch(Logoutredux(false))
    dispatch(GetUser(''))
  }

  const [showlist, setShowlist] = useState(false)

  const toggleshowlist = () => {
    if (showlist == false) {
      setShowlist(true)
      // dispatch(GetUser('001C'))
    } else {
      setShowlist(false)
    }
  }

  const User = useSelector((state) => state.Login.usernumber)


  const Accountdropdown = () => {
    return (
      <div className='account-dropdownlist'>
        <div className={checked === 'dark' ? 'wrap-pane-setting-dark' : 'wrap-pane-setting-light'}>
          <div className='usernumber'>Xin chào: {User}</div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>Giao diện</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_theme'
                    value='light'
                    checked={checked === 'light'}
                    onChange={handleChangeTheme}
                  />
                  <span>Sáng</span>
                </div>
                <div className='setting-option'>
                  <input type='radio'
                    name='radio_theme'
                    value='dark'
                    checked={checked === 'dark'}
                    onChange={handleChangeTheme}
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
          <div className='date-clock'>
            <ImClock style={clock} />
            <span>&nbsp;</span>
            <span>{date}</span>
            <span>&nbsp;</span>
            <span >{time}</span>
          </div>
          <marquee className='moving-band' >
            <p className='marquee-header'>
              <span className='marquee-item'>GT thoả thuận: </span>
              <span className='marquee-item'>141.25 tỷ</span>
              <span className='marquee-item'>KLGD lô lẻ: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>GTGD: </span>
              <span className='marquee-item'>14534.999 tỷ</span>
              <span className='marquee-item'>KL thoả thuận: </span>
              <span className='marquee-item'>111.242.555 tỷ</span>
              <span className='marquee-item'>KLGD: </span>
              <span className='marquee-item'>104.202.002 tỷ</span>
              <span className='marquee-item'>GT thoả thuận: </span>
              <span className='marquee-item'>141.25 tỷ</span>
              <span className='marquee-item'>KLGD lô lẻ: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>GTGD: </span>
              <span className='marquee-item'>14534.999 tỷ</span>
              <span className='marquee-item'>KL thoả thuận: </span>
              <span className='marquee-item'>111.242.555 tỷ</span>
              <span className='marquee-item'>KLGD: </span>
              <span className='marquee-item'>104.202.002 tỷ</span>
            </p>
          </marquee>
          <div className='log-in'>
            <Link to='/'><button className='log-in-btn' onClick={hadleLogout}>Đăng xuất</button></Link>
            <div className='wrap'>
              <button className='toggle-info' onClick={toggleshowlist}>
                <CgProfile style={profileicon} /><BiDownArrow style={arrow} />
              </button>
            </div>
          </div>
        </div>
        <div >  {showlist ? <Accountdropdown/> : ''}</div>
      </header>
      <div className={checked === 'light' ? 'container-light' : 'container-dark'}>
        <br />
        <div className='home-img'>
          <img src={checked === 'dark' ? home_img : home_img_light} alt='Bieu do' className='chart-img' />
        </div>
      </div>
    </div>
  )
}

export default Home