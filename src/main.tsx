import 'virtual:fonts.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './main.css'

import { Home, ProductDetails } from './pages'

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product/:id" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
