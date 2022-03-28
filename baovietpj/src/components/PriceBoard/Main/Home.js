import React, { useState, useEffect } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import home_img from '../../../Assetss/img/home_img.png';
import home_img_light from '../../../Assetss/img/home_img_light.png';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useTranslation } from 'react-i18next'
import Body from '../Body/Body';
function Home() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('title.document_title_home')
  }, [])

  const themeMode = useSelector((state) => state.Theme.themeMode)

  return (
    <div className='main' >
      <div className={themeMode === 'light' ? 'container-light fixed' : 'container-dark fixed'}>
        <div className=''>
          <Header />
          <div className='home-img' >
            <img src={themeMode === 'dark' ? home_img : home_img_light} alt='Bieu do' className='chart-img' />
          </div>
        </div>
      </div>
      <div className='body-css'>
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
export default Home
