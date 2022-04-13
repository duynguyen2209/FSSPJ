import React, { useEffect, useState } from "react";
import './Table.scss';
import vn30_instruments from '../../../../Datafile/PriceBoardData/vn30_instruments.json';
import { randomValue, TableView } from './TableBody';
import $ from 'jquery';

export default function TableVN30() {
    let VN30Data = vn30_instruments.d;
    let get20Data = VN30Data.slice(0, 20)
    const clearHightlight = () => {
        $(".table tbody tr td").removeClass('backGroundYellow')
        $(".table tbody tr td").removeClass('backGroundPurple')
        $(".table tbody tr td").removeClass('backGroundBlue')
        $(".table tbody tr td").removeClass('backGroundGreen')
        $(".table tbody tr td").removeClass('backGroundRed')
    }
    const getHighlight = (currentValue, value, data) => {
        let className = ''
        if (currentValue === value) {
            className = ''
        } else if (currentValue !== value && value == data.reference) {
            className = 'backGroundYellow'
        } else if (currentValue !== value && value == data.ceiling) {
            className = 'backGroundPurple'
        } else if (currentValue !== value && value == data.floor) {
            className = 'backGroundBlue'
        } else if (currentValue !== value && value > data.reference) {
            className = 'backGroundGreen'
        } else {
            className = 'backGroundRed'
        }
        return className;
    }

    const ChangeData = () => {
        const randomIndex = (max, min) => {
            let value = Math.floor(Math.random() * (max - min + 1) + min)
            return value
        }
        const newList = [
            get20Data[randomIndex(19, 0)],
            get20Data[randomIndex(19, 0)],
            get20Data[randomIndex(19, 0)],
            get20Data[randomIndex(19, 0)],
            get20Data[randomIndex(19, 0)]
        ]

        newList.map((data) => {

            if (data.bidPrice2 && data.bidPrice3 &&
                data.offerPrice1 && data.offerPrice2 && data.offerPrice3 !== undefined) {
                let bidPrice3 = randomValue(data.ceiling, data.floor)
                let bidPrice2 = randomValue(data.ceiling, data.floor)
                let offerPrice1 = randomValue(data.ceiling, data.floor)
                let offerPrice2 = randomValue(data.ceiling, data.floor)
                let offerPrice3 = randomValue(data.ceiling, data.floor)


                return (
                    data.bidPrice3_ClassHightlight = getHighlight(data.bidPrice3, bidPrice3, data),
                    data.bidPrice2_ClassHightlight = getHighlight(data.bidPrice2, bidPrice2, data),
                    data.offerPrice1_ClassHightlight = getHighlight(data.bidPrice1, offerPrice1, data),
                    data.offerPrice2_ClassHightlight = getHighlight(data.offerPrice2, offerPrice2, data),
                    data.offerPrice3_ClassHightlight = getHighlight(data.offerPrice3, offerPrice3, data)),

                    data.bidPrice3 = bidPrice3,
                    data.bidPrice2 = bidPrice2,
                    data.offerPrice1 = offerPrice1,
                    data.offerPrice2 = offerPrice2,
                    data.offerPrice3 = offerPrice3



            } else {
                return ''
            }
        })
        setTimeout(() => {
            clearHightlight()
        }, 1000)
        setData(get20Data.slice(0, 10))

    }
    const [data, setData] = useState(get20Data)
    useEffect(() => {
        setInterval(ChangeData, 3000)
    }, [])

    const TableVN30 = VN30Data.map((item) => {
        return (
            TableView(item)
        )
    }
    )
    return (
        <>
            {TableVN30}
        </>
    )
}
