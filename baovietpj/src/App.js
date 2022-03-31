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
                <Route exact path={path.LOGIN} element={<PrivateRouteLogin><Login /></PrivateRouteLogin> } />
                <Route path={path.HOME} element={<PrivateRouteHome><Home/></PrivateRouteHome>}/>
            </Routes>
        </>
    );
}

export default App;