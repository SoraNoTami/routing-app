import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Produits } from '../routes/Produits';
import  Produit  from '../routes/Produit';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Produits />} />
                    {/* <Route path="/product" element={<Produit />} /> */}
                    <Route path="/product/:productId" element={<Produit />} />
                </Routes>
            </>
        )
    }
}