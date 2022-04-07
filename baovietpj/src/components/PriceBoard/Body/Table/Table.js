import React, { useState } from 'react'
import './Table.scss';
import TableHOSE from '../Table/TableHOSE'
import TableVN30 from '../Table/TableVN30'
import TableHNX from '../Table/TableHNX'
import TableUPCOM from '../Table/TableUPCOM'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Table() {
  const Table_tab = useSelector((state) => state.Login.table_tab)
  const { t } = useTranslation();
  const Which_tab = () => {
    if (Table_tab === 'Hose') {
      return (<TableHOSE />)
    } else if (Table_tab === 'VN30') {
      return (<TableVN30 />)
    } else if (Table_tab === 'HNX') {
      return (<TableHNX />)
    } else {
      return (<TableUPCOM />)
    }
  }

  return (
    <>
      <table className='table' >
        <thead className="fix-sticky">
          <tr>
            <th col='1' rowSpan="2">{t('table.symbol')}</th>
            <th col='1' rowSpan="2" className='bg3Col'>{t('table.ref')}</th>
            <th col='1' rowSpan="2" className='bg3Col'>{t('table.celi')}</th>
            <th col='1' rowSpan="2" className='bg3Col'>{t('table.floor')}</th>
            <th col='6' colSpan="6">{t('table.bid')} </th>
            <th col='3' colSpan="3" className='bg3Col'>{t('table.matched')} </th>
            <th col='6' colSpan="6">{t('table.ask')} </th>
            <th col='2' rowSpan="2">{t('table.total_vol')} </th>
            <th col='3' colSpan="3" className='bg3Col'>{t('table.price')}</th>
            <th col='2' colSpan="2">{t('table.remain')}</th>
            <th col='2' colSpan="2">{t('table.foreign')}</th>
          </tr>
          <tr>
            <th col='1' rowSpan='1'>{t('table.prc3')}</th>
            <th col='1' rowSpan='1'>{t('table.vol3')}</th>
            <th col='1' rowSpan='1'>{t('table.prc2')}</th>
            <th col='1' rowSpan='1'>{t('table.vol2')}</th>
            <th col='1' rowSpan='1'>{t('table.prc1')}</th>
            <th col='1' rowSpan='1'>{t('table.vol1')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.price')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.vol')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.percent')}</th>
            <th col='1' rowSpan='1'>{t('table.prc1')}</th>
            <th col='1' rowSpan='1'>{t('table.vol1')}</th>
            <th col='1' rowSpan='1'>{t('table.prc2')}</th>
            <th col='1' rowSpan='1'>{t('table.vol2')}</th>
            <th col='1' rowSpan='1'>{t('table.prc3')}</th>
            <th col='1' rowSpan='1'>{t('table.vol3')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.high')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.average')}</th>
            <th col='1' rowSpan='1' className='bg3Col'>{t('table.low')}</th>
            <th col='1' rowSpan='1'>{t('table.bought')}</th>
            <th col='1' rowSpan='1'>{t('table.sold')}</th>
            <th col='1' rowSpan='1'>{t('table.bought')}</th>
            <th col='2' rowSpan='1'>{t('table.sold')}</th>
          </tr>
        </thead>
        <tbody>
          {Which_tab()}
        </tbody>
      </table>
    </>
  )
}

export default Table