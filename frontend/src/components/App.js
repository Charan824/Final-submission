import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Smartwatch from './Smartwatch';
import Headphones from './Headphones';
import Tablet from './Tablet';
import Camera from './Camera';
import Speaker from './Speaker';
import Charger from './Charger';
import PhoneCase from './PhoneCase';
import ScreenProtector from './ScreenProtector';
import Checkout from './Checkout'; // Make sure to create and import the Checkout component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/smartphone" element={<Smartphone />} />
                <Route path="/laptop" element={<Laptop />} />
                <Route path="/smartwatch" element={<Smartwatch />} />
                <Route path="/headphones" element={<Headphones />} />
                <Route path="/tablet" element={<Tablet />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/speaker" element={<Speaker />} />
                <Route path="/charger" element={<Charger />} />
                <Route path="/phonecase" element={<PhoneCase />} />
                <Route path="/screenprotector" element={<ScreenProtector />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;