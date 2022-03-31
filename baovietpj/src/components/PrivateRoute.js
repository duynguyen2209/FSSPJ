import React from "react"
import { useSelector } from "react-redux"
import {Navigate} from 'react-router-dom'
import { path } from "../Const/Const"

export function PrivateRouteHome({children}){
    const usercheck = useSelector((state) => state.Login.isLogin)
    return usercheck ? children : <Navigate to={path.LOGIN}/>
}

export function PrivateRouteLogin({children}){
    const usercheck = useSelector((state) => state.Login.isLogin)
    return !usercheck ? children : <Navigate to={path.HOME} />
}