import React, { useState } from 'react';
import { ImPlus } from 'react-icons/im';
import { VscTriangleDown } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { BsFillCameraVideoFill, BsThreeDotsVertical } from 'react-icons/bs'
import './NavBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { ChangTabName, SwitchTab } from '../../../Redux/Actions/action';
import ModalBox from './ModalBox';

function NavBar() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const Table_tab = useSelector((state) => state.Login.table_tab)
    const [table, setTable] = useState(Table_tab)
    const TabHoseVn30 = useSelector((state) => state.Login.TabName_)
    const [tabName, settabName] = useState(TabHoseVn30)
    const [modal,setModal] = useState(false)
    const SettableHose = () => {
        setTable('Hose')
        dispatch(SwitchTab('Hose'))
        settabName('HOSE')
        dispatch(ChangTabName('HOSE'))
    }
    const SettableVN30 = () => {
        setTable('VN30')
        dispatch(SwitchTab('VN30'))
        settabName('VN30')
        dispatch(ChangTabName('VN30'))

    }
    const SettableHNX = () => {
        setTable('HNX')
        settabName('HOSE')
        dispatch(SwitchTab('HNX'))

    }
    const SettableUPCOM = () => {
        setTable('UPCOM')
        settabName('HOSE')
        dispatch(SwitchTab('UPCOM'))
    }

    const setActive = () => {
        if (table === 'Hose') {
            return 'follow-list active'
        } else if (table === 'VN30') {
            return 'follow-list active'
        } else {
            return 'follow-list'
        }
    }

    return (
        <div className='Navbar'>
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
                <li className='tabWatchList  tabWatchList-hose-vn30'>
                    <a title={t('navbar.hose_titlte')} className={setActive()} onClick={SettableHose}>{tabName}<VscTriangleDown className='arrow-down' /></a>
                    <ul className='sub-menu-item'>
                        <li className={table === 'Hose' ? 'submenu-list-active' : 'submenu-list'} onClick={SettableHose} >
                            <a ><span >HOSE</span></a>
                        </li>
                        <li className={table === 'VN30' ? 'submenu-list-active' : 'submenu-list'} onClick={SettableVN30}>
                            <a><span>VN30</span></a>
                        </li>
                    </ul>
                </li>
                <li className='tabWatchList' onClick={SettableHNX}>
                    <a title={t('navbar.HNX_title')} className={table === 'HNX' ? 'follow-list active' : 'follow-list'}>HNX<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList ' onClick={SettableUPCOM}>
                    <a title={t('navbar.Upcom_title')} className={table === 'UPCOM' ? 'follow-list active' : 'follow-list'}>UPCOM<VscTriangleDown className='arrow-down' /></a>
                </li>
                <li className='tabWatchList '>
                    <a className='follow-list '>{t('navbar.stock_screening')}<AiFillStar className='arrow-down star-icon' /><VscTriangleDown className='arrow-down' /></a>
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
                    <li onClick={()=>(setModal(true))}>
                        <a title={t('navbar.threedot')} className='icon-three-dot'><BsThreeDotsVertical /></a>
                    </li>
                    {modal && <ModalBox closemodal={setModal}/>}
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