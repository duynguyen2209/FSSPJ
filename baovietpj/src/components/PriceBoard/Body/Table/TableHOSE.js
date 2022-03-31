import React from "react";
import './Table.scss';
import hose_instruments from '../../../../Datafile/PriceBoardData/hose_instruments.json'
export default function TableHOSE() {
    const CaculatePrice = (item, percent) => {
        if (item != 0) {
            return ((Math.round(item * 1) / percent).toFixed(2))
        } else {
            return ''
        }
    }
    let HoseData = hose_instruments.d;
    const TableHose = HoseData.map((item, i) => {
        return (
            <>
                <tbody>
                    <tr key={i}>
                        <td className="td-symbol" scope="row" title={item.FullName}>{item.symbol}</td>
                        <td className="td-thamchieu">{CaculatePrice(item.reference, 1000)}</td>
                        <td className="td-tran">{CaculatePrice(item.ceiling, 1000)}</td>
                        <td className="td-san">{CaculatePrice(item.floor, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidPrice3, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidVol3, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidPrice2, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidVol2, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidPrice1, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidVol1, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.closePrice, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.bidVol1, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.changePercent, 1)}%</td>
                        <td className="red-color">{CaculatePrice(item.offerPrice1, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.offerVol1, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.offerPrice2, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.offerVol2, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.offerPrice3, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.offerVol3, 1000)}</td>
                        <td className="totalTrading_color">{CaculatePrice(item.totalTrading, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.high, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.averagePrice, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.low, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.PT_TOTAL_TRADED_QTTY, 1)}</td>
                        <td className="red-color">{CaculatePrice(item.PT_TOTAL_TRADED_VALUE, 1)}</td>
                        <td className="red-color">{CaculatePrice(item.foreignBuy, 1000)}</td>
                        <td className="red-color">{CaculatePrice(item.foreignSell, 1000)}</td>
                    </tr>
                </tbody>
            </>
        )
    }
    )
    return (
        <>
            {TableHose}
        </>
    )
}
