import React from "react";
import { Route, Navigate } from 'react-router-dom';
import Home from "./components/HomeComponents/Home";
import Login from "./LoginService/Login";
const useAuth = () => {
    const user = {loggIn : false};
    return user && user.loggIn;
};


 function ProtectedRoute() {
    const isAuth = useAuth();
    return true ? <Home/> : <Login/>

}

export default ProtectedRoute;