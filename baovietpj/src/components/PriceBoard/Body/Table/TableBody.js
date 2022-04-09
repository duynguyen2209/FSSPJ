import React, { useState } from 'react'
import './InfoCompany.scss'

export const CaculatePB = (item, percent, fix) => {
    if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
        return ((Math.round(item * 1) / percent).toFixed(fix))
    } else if (item === undefined) {
        return ''
    }
}
export const CaculatorPercent = (item) => {
    if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
        return ((item).toFixed(1))
    } else if (item === undefined) {
        return ''
    }
}
export const setColor = (item, itemName) => {
    let className =''
    if (itemName == item.reference) {
        className = 'yellow-color '
    } else if (itemName == item.ceiling) {
        className = 'purple-color'
    } else if (itemName == item.floor) {
        className = 'blue-color'
    } else if (itemName > item.reference) {
        className = 'green-color '
    } else {
        className = 'red-color'
    }

    // if(item[name + 'ClassHightlight']){
    //     className = className + ' ' + item[name + 'ClassHightlight'] 
    // }
    return className
}
export const setColorBeside = ( item,Prc) => {
    let className =''
    if (Prc == item.reference) {
        className =  'yellow-color'
    } else if (Prc == item.ceiling) {
        className =  'purple-color'
    } else if (Prc == item.floor) {
        className =  'blue-color'
    } else if (Prc > item.reference) {
        className =  'green-color'
    } else {
        className =  'red-color'
    }

    // if(item[name + 'ClassHightlight']){
    //     className = className + ' ' + item[name + 'ClassHightlight'] 
    // }
    return className
}

export const randomValue = (max, min) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    value = parseFloat(value / 1000).toFixed(2) * 1000
    return value
}


export function TableView(item) {
    const [checked, setChecked] = useState(false)

    function InfoCompany() {
        return (
            <div className='infmodalBg'>
                <div className='Modalinfo-box'>
                    <br />
                    <h1>Thông tin mã chứng khoán</h1>
                    <button className='btn-close' onClick={() => setChecked(!checked)}>[ X ]</button>
                    <div className='Showhidetab'>
                        <h2>Tổng quan</h2>
                        <h3 style={{ textAlign: 'center' }}>Mã chứng khoán: {item.symbol} </h3>
                        <br />
                        <div className='wrapper-modalinfo'>
                            <div className='item-text'>Tên công ty: {item.FullName}</div>
                            <div className='item-text'>Giá: {item.closePrice}</div>
                            <div className='item-text'>Khối lượng: {item.closeVol}</div>
                            <div className='item-text'>Phần trăm: {item.changePercent} %</div>
                            <div className='item-text'>Tổng khối lượng: {item.totalTrading}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <tr>
                <td className={setColor(item, item.closePrice)} onClick={() => setChecked(true)} scope="row" title={item.FullName}>{item.symbol}</td>
                {checked && <InfoCompany />}
                <td className="td-thamchieu">{CaculatePB(item.reference, 1000, 2)}</td>
                <td className="td-tran">{CaculatePB(item.ceiling, 1000, 2)}</td>
                <td className="td-san">{CaculatePB(item.floor, 1000, 2)}</td>
                <td className={setColor(item, item.bidPrice3)}>{CaculatePB(item.bidPrice3, 1000, 2)}</td>
                <td className={setColorBeside(item, item.bidPrice3, item.bidVol3)}>{CaculatePB(item.bidVol3, 1000, 2)}</td>
                <td className={setColor(item, item.bidPrice2)}>{CaculatePB(item.bidPrice2, 1000, 2)}</td>
                <td className={setColorBeside(item, item.bidPrice2, item.bidVol2)}>{CaculatePB(item.bidVol2, 1000, 2)}</td>
                <td className={setColor(item, item.bidPrice1)}>{CaculatePB(item.bidPrice1, 1000, 2)}</td>
                <td className={setColorBeside(item, item.bidPrice1, item.bidVol1)}>{CaculatePB(item.bidVol1, 1000, 2)}</td>
                <td className={setColor(item, item.closePrice)}>{CaculatePB(item.closePrice, 1000, 2)}</td>
                <td className={setColorBeside(item, item.closePrice)}>{CaculatePB(item.closeVol, 10, 0)}</td>
                <td className={setColorBeside(item, item.closePrice)}>{CaculatorPercent(item.changePercent)} {item.changePercent ? '%' : ''}</td>
                <td className={setColor(item, item.offerPrice1)}>{CaculatePB(item.offerPrice1, 1000, 2)}</td>
                <td className={setColorBeside(item, item.offerPrice1)}>{CaculatePB(item.offerVol1, 1000, 2)}</td>
                <td className={setColor(item, item.offerPrice2)}>{CaculatePB(item.offerPrice2, 1000, 2)}</td>
                <td className={setColorBeside(item, item.offerPrice2)}>{CaculatePB(item.offerVol2, 1000, 2)}</td>
                <td className={setColor(item, item.offerPrice3)}>{CaculatePB(item.offerPrice3, 1000, 2)}</td>
                <td className={setColorBeside(item, item.offerPrice3)}>{CaculatePB(item.offerVol3, 1000, 2)}</td>
                <td className="noneChangeColor">{CaculatePB(item.totalTrading, 1000, 2)}</td>
                <td className={setColor(item, item.high)}>{CaculatePB(item.high, 1000, 2)}</td>
                <td className={setColor(item, item.averagePrice)}>{CaculatePB(item.averagePrice, 1000, 2)}</td>
                <td className={setColor(item, item.low)}>{CaculatePB(item.low, 1000, 2)}</td>
                <td className="noneChangeColor">{ }</td>
                <td className="noneChangeColor">{ }</td>
                <td className="noneChangeColor">{CaculatePB(item.foreignBuy, 1000, 2)}</td>
                <td className="noneChangeColor">{CaculatePB(item.foreignSell, 1000, 2)}</td>
            </tr>
        </>
    )
}

