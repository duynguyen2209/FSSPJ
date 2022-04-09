import React, { useEffect, useState } from "react";
import './Table.scss';
import hnx_instruments from '../../../../Datafile/PriceBoardData/hnx_instruments.json';
import { randomValue, TableView } from './TableBody';
export default function TableHNX() {
    let HNXData = hnx_instruments.d;
    let get20Data = HNXData.slice(0, 20)
    const start = 0
    const end = Math.floor(Math.random() * (20 - 10)) + 10

    const getHighlight = (currtenValue, value, data) => {
        let className = ''
        if (currtenValue === value) {
            className = ''
        } else if (currtenValue !== value && value == data.reference) {
            className = 'backGroundYellow' 
        } else if (currtenValue !== value && value == data.ceiling) {
            className = 'backGroundPurple'
        } else if (currtenValue !== value && value == data.floor) {
            className = 'backGroundBlue' 
        } else if (currtenValue !== value && value > data.reference) {
            className = 'backGroundGreen'
        } else {
            className = 'backGroundRed' 
        }
        return className;
    }

    const ChangeData = () => {
        get20Data.slice(start, end).map((data) => {
            if (data.bidPrice2 && data.bidPrice3 &&
                data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
                data.closePrice != undefined) {
                let bidPrice3 = randomValue(data.ceiling, data.floor)
                let bidPrice2 = randomValue(data.ceiling, data.floor)
                let offerPrice1 = randomValue(data.ceiling, data.floor)
                let offerPrice2 = randomValue(data.ceiling, data.floor)
                let offerPrice3 = randomValue(data.ceiling, data.floor)
                let closePrice = randomValue(data.ceiling, data.floor)
                let ListRandom = [
                    data.bidPrice3 = bidPrice3,
                    data.bidPrice2 = bidPrice2,
                    data.offerPrice1 = offerPrice1,
                    data.offerPrice2 = offerPrice2,
                    data.offerPrice3 = offerPrice3,
                    data.closePrice = closePrice
                ]
                return (
                    data.bidPrice3_ClassHightlight = getHighlight(data.bidPrice3, bidPrice3, data),
                    data.bidPrice2_ClassHightlight = getHighlight(data.bidPrice2, bidPrice2, data),
                    data.offerPrice1_ClassHightlight = getHighlight(data.bidPrice1, offerPrice1, data),
                    data.offerPrice2_ClassHightlight = getHighlight(data.offerPrice2, offerPrice2, data),
                    data.offerPrice3_ClassHightlight = getHighlight(data.offerPrice3, offerPrice3, data),
                    data.closePrice_ClassHightlight = getHighlight(data.closePrice, closePrice, data)),
                    
                    ListRandom[0,1]
                    
            } else {
                return ''
            }
        })
        setData(get20Data.slice(0, 10))

    }
    const [data, setData] = useState(get20Data)
    useEffect(() => {
        setInterval(ChangeData, 3000)
    }, [])

    const TableHNX = HNXData.map((item) => {
        return (
            TableView(item)
        )
    }
    )
    return (
        <>
            {TableHNX}
        </>
    )
}
