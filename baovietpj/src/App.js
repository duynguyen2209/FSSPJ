import React, { useState } from 'react';
import Login from './LoginService/Login';
import { Routes, Route} from 'react-router-dom';
import ShowHome from './components/HomeComponents/HomeRoute';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path='/Home' element={<ShowHome/>}/>
            </Routes>
        </>
    );
}

export default App;