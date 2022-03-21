import React from "react"
import Home from "../HomeComponents/Home"
import { useSelector } from "react-redux"
import {checkLogin} from "../../Redux/Selectors/SelectorLogin"

export default function ShowHome(){
    const usercheck = useSelector(checkLogin);
    
    if(usercheck){
        return <Home/>
    }else{
        return ''
    }
}