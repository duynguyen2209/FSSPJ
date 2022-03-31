import React from 'react';
import Login from '../src/components/Login/Login';
import { Routes, Route} from 'react-router-dom';
import Home from './components/PriceBoard/Main/Home';
import {path} from './Const/Const'
import {PrivateRouteHome,PrivateRouteLogin} from './components/PrivateRoute'
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<PrivateRouteLogin><Login /></PrivateRouteLogin> } />
                <Route path={'/Home'} element={<PrivateRouteHome><Home/></PrivateRouteHome>}/>S
            </Routes>
        </>
    );
}

export default App;