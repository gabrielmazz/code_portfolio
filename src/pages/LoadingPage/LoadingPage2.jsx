import React from 'react'

import { motion } from "framer-motion";

import './LoadingPage.css'

const LoadingPage = () => {
    return (
            <div className="container-loading_page">

                <div className="container-loading_page_text font-body">
                    <motion.h1 
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.7 }}
                    >
                        Bem vindo ao meu portfólio

                    </motion.h1>

                    <motion.h2 
                        initial={{ x: +1500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.7 }}
                    >
                        &lt;Gabriel Mazzuco/&gt;
                    </motion.h2>
                </div>
                
                <motion.div 
                    class="loader_loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}   
                    transition={{ duration: 2.5 }}
                >
                    <div class="loader-square card"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                </motion.div>
            </div>
    )
}

export default LoadingPage
