import React from "react"
import Home from "../PriceBoard/Main/Home"
import { useSelector } from "react-redux"

export default function ShowHome(){
    const usercheck = useSelector((state) => state.Login.isLogin);
    if(usercheck){
        return <Home/>
    }else{
        return ''
    }
}