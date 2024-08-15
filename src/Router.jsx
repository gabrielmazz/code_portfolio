import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import LandingPage from './pages/LandingPage/LandingPage'
import AboutMe from './pages/AboutMe/AboutMe'

const AppRoutes = () => {

    return (
        <div>

            <Router>

                <Routes>

                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutMe />} />

                </Routes>

            </Router>

        </div>
    )
}

export default AppRoutes