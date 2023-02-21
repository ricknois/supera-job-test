import 'virtual:fonts.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './main.css'

import CartState from './context/cart/CartState'
import { Cart, Home, ProductDetails } from './pages'

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <CartState>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductDetails />} path="/product/:id" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    </CartState>
  </React.StrictMode>
)
