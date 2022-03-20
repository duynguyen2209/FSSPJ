import React from 'react';
import Home from './components/HomeComponents/Home';
import Login from './LoginService/Login';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const isAuthenticated = true
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;