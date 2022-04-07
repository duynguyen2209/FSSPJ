import React, { useEffect, useState } from "react";
import './Table.scss';
import upcom_instruments from '../../../../Datafile/PriceBoardData/upcom_instruments.json';
import {randomValue,TableView} from './TableBody';

export default function TableUPCOM() {
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
                    data.bidPrice3 = randomValue(data.ceiling,data.floor),
                    data.bidPrice2 = randomValue(data.ceiling,data.floor),
                    data.offerPrice1 = randomValue(data.ceiling,data.floor),
                    data.offerPrice2 = randomValue(data.ceiling,data.floor),
                    data.offerPrice3 = randomValue(data.ceiling,data.floor),
                    data.closePrice = randomValue(data.ceiling,data.floor)
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
            TableView(item)
        )
    }
    )
    return (
        <>
            {TableUPCOM}
        </>
    )
}
