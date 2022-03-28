import React, { useState } from 'react';
import { ImPlus } from 'react-icons/im';
import { VscTriangleDown } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { BsFillCameraVideoFill, BsThreeDotsVertical } from 'react-icons/bs'
import './NavBar.scss';
import { useSelector,useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { SwitchTab } from '../../../Redux/Actions/action';
function NavBar() {
    const themeMode = useSelector((state) => state.Theme.themeMode)
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const Table_tab = useSelector((state) => state.Login.table_tab)
    const [table,setTable] = useState(Table_tab)
    
    const SettableHose = () => {
        setTable('Hose')
        dispatch(SwitchTab('Hose'))
    }
    const SettableVN30 = () => {
        setTable('VN30')
        dispatch(SwitchTab('VN30'))
    }
    const SettableHNX = () => {
        setTable('HNX')
        dispatch(SwitchTab('HNX'))
    }
    const SettableUPCOM = () => {
        setTable('UPCOM')
        dispatch(SwitchTab('UPCOM'))
    }

    return (
        <div className={themeMode === 'light' ? 'Nav-bar-light' : 'Nav-bar-dark'}>
            <div className='search-box'>
                <div className='input-box'>
                    <input type='text' placeholder={t('navbar.search_input')} className='input-search' />
                </div>
                <button type='submit' className='button-search'><ImPlus className='plus-icon' /></button>
            </div>
            <ul className='primary'>
                <li className='tabWatchList '>
                    <a title={t('navbar.follow_list')} className='follow-list'>{t('navbar.favorite_symbols')}<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList  tabWatchList-hose-vn30 '>
                    <a title={t('navbar.hose_titlte')} className='follow-list 'onClick={SettableHose}>Hose<VscTriangleDown className='arrow-down' /></a>
                    <ul className='sub-menu-item'>
                        <li className='submenu-list' onClick={SettableHose}>
                            <a ><span>HOSE</span></a>
                        </li>
                        <li className='submenu-list'  onClick={SettableVN30}>
                            <a><span>VN30</span></a>
                        </li>
                    </ul>
                </li>
                <li className='tabWatchList ' onClick={SettableHNX}>
                    <a title={t('navbar.HNX_title')}className='follow-list'>HNX<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList ' onClick={SettableUPCOM}>
                    <a title={t('navbar.Upcom_title')} className='follow-list'>UPCOM<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list'>{t('navbar.stock_screening')}<AiFillStar className='arrow-down star-icon' /><VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list'>{t('navbar.derivatives')}<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list'>{t('navbar.warrant')}</a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list'>{t('navbar.bonds')}</a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list'>{t('navbar.odd_lot')} <VscTriangleDown className='arrow-down' /></a>
                </li>
            </ul>
            <div className='right-icon'>
                <ul className='secondary'>
                    <li >
                        <a title={t('navbar.threedot')} className='icon-three-dot'><BsThreeDotsVertical /></a>
                    </li>
                </ul>
                <ul className='secondary icon-toggle-two'>
                    <li className='icon-toggle'>
                        <a title={t('navbar.slide_show')} className='icon-secondary'><BsFillCameraVideoFill /></a>
                    </li>
                    <li className='icon-toggle'>
                        <a title={t('navbar.hideshow_chart')} className='icon-secondary'><IoIosArrowDropupCircle /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar