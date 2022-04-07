import React, { useEffect, useState } from "react";
import './Table.scss';
import hose_instruments from '../../../../Datafile/PriceBoardData/hose_instruments.json';
import { randomValue,TableView } from './TableBody';
export default function TableHOSE() {

    const start = 0
    const end = Math.floor(Math.random() * (20 - 10)) + 10

    let HoseData = hose_instruments.d;
    let get20Data = HoseData.slice(0, 20)

    const ChangeData = () => {
        get20Data.slice(start, end).map((data) => {
            if (data.bidPrice2 && data.bidPrice3 &&
                data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
                data.closePrice != undefined) {
                return (
                    setData(get20Data.slice(0, 10)),
                    data.bidPrice3 = randomValue(data.ceiling, data.floor),
                    data.bidPrice2 = randomValue(data.ceiling, data.floor),
                    data.offerPrice1 = randomValue(data.ceiling, data.floor),
                    data.offerPrice2 = randomValue(data.ceiling, data.floor),
                    data.offerPrice3 = randomValue(data.ceiling, data.floor),
                    data.closePrice = randomValue(data.ceiling, data.floor)
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


    const TableHose = get20Data.map((item) => {
        return (
            TableView(item)
        )
    }
    )
    return (
        <>
            {TableHose}
        </>
    )
}
