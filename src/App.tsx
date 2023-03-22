import { ErrorPage, Home, Login, Signup } from 'pages';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
}

export default App