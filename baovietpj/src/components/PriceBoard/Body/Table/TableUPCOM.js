import React, { useEffect, useState } from "react";
import './Table.scss';
import upcom_instruments from '../../../../Datafile/PriceBoardData/upcom_instruments.json'

export default function TableUPCOM() {
    const CaculatePB = (item, percent, fix) => {
        if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
            return ((Math.round(item * 1) / percent).toFixed(fix))
        } else if (item === undefined) {
            return ''
        }
    }
    const CaculatorPercent = (item) => {
        if (item !== 0 && item !== undefined && item !== null && item !== NaN) {
            return ((item).toFixed(1))
        } else if (item === undefined) {
            return ''
        }
    }
    const setColor = (item, itemName) => {
        if (itemName == item.reference) {
            return 'yellow-color'
        } else if (itemName == item.ceiling) {
            return 'purple-color'
        } else if (itemName == item.floor) {
            return 'blue-color'
        } else if (itemName > item.reference) {
            return 'green-color'
        } else {
            return 'red-color'
        }
    }
    const setColorBeside = (item, Prc) => {
        if (Prc == item.reference) {
            return 'yellow-color'
        } else if (Prc == item.ceiling) {
            return 'purple-color'
        } else if (Prc == item.floor) {
            return 'blue-color'
        } else if (Prc > item.reference) {
            return 'green-color'
        } else {
            return 'red-color'
        }
    }

    const start = Math.floor(Math.random() * 10)
    const end = Math.floor(Math.random() * (20 - 10)) + 10

    let UPCOMData = upcom_instruments.d;
    let get20Data = UPCOMData.slice(0, 20)
    const ChangeData = () => {
        get20Data.slice(start, end).map((data) => {
            if (data.bidPrice2 && data.bidPrice3 &&
                data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
                data.closePrice != undefined) {
                return(
                    setData(get20Data.slice(0,10)),
                    data.bidPrice3 = Math.floor(data.bidPrice3) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500),
                    data.bidPrice2 = Math.floor(data.bidPrice2) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500),
                    data.offerPrice1 = Math.floor(data.offerPrice1) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500),
                    data.offerPrice2 = Math.floor(data.offerPrice2) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500),
                    data.offerPrice3 = Math.floor(data.offerPrice3) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500),
                    data.closePrice = Math.floor(data.closePrice) + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 1500)
                )
            } else {
                return ''
            }
        })
    }
    const [data, setData] = useState(get20Data)
    useEffect(() => {
        setInterval(ChangeData, 3000)
    }, [])

    const TableUPCOM = UPCOMData.map((item) => {
        return (
            <>
                <tbody>
                <tr>
                        <td className={setColor(item, item.closePrice)} scope="row" title={item.FullName}>{item.symbol}</td>
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
                </tbody>
            </>
        )
    }
    )
    return (
        <>
            {TableUPCOM}
        </>
    )
}
