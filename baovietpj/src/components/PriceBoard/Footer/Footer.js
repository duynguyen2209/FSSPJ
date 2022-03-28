import React from 'react';
import { RiLineChartLine } from 'react-icons/ri';
import { HiShoppingCart } from 'react-icons/hi';
import './Footer.scss'
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className='footer-sticky'>
            <div className='footer-info'>
                <span>{t('footer.stock_market')}</span>
                <span className='green-letter'> x1000</span>
                <span>{t('footer.volumn')}</span>
                <span className='green-letter'> x10</span>
                <span>-{t('footer.derivative_market')}</span>
                <span className='green-letter'> x1</span>
                <span>{t('footer.volumn')} </span>
                <span className='green-letter'> x1</span>
                <span>-{t('footer.oddlot_market')}</span>
                <span className='green-letter'> x1</span>
            </div>
            <div className='wrap-btn'>
                <div className='btn-watch'>
                    <RiLineChartLine className='watch-chart-icon'/>
                    <span>{t('footer.price_board')}</span>
                </div>
                <div className='btn-set'>
                    <HiShoppingCart className='watch-chart-icon'/>
                    <span>{t('footer.set_order')}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer