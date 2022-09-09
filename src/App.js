import React, { useState } from 'react';
import './App.css';
import Basket from "./components/Basket.js";
import OrderForm from "./components/OrderForm";

function App() {
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Basket />
            <OrderForm />
        </>
    );
}

export default App;
