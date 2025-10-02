import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"
import { Toaster } from 'react-hot-toast'

function App() {

  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route index path="/my-advanced-portfolio/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
       <Toaster 
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '10px',
          fontSize: '13px',
          color: '#fff',
          backgroundColor: '#713200',
        },
      }} />
</div>
)}

export default App
