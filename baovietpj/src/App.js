import React from 'react';
import Login from '../src/components/Login/Login';
import { Routes, Route} from 'react-router-dom';
import ShowHome from './components/PriceBoard/HomeRoute';
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path={'/Home'} element={<ShowHome/>}/>S
            </Routes>
        </>
    );
}

export default App;