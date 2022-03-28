import React from 'react';
import Login from '../src/components/Login/Login';
import { Routes, Route} from 'react-router-dom';
import ShowHome from './components/PriceBoard/HomeRoute';
import NotFound from './components/PriceBoard/NotFound';
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path={'/Home'} element={<ShowHome/>}/>
                <Route element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;