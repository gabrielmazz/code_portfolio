import React from 'react'

import './Home.css'

import { motion } from "framer-motion";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {

    return (
        
        <div class="container_home text-white font-body">

            {/* Lado esquerdo, texto de apresentação */}
            <div class="lado_esquerdo">

                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p class="text_1">Olá, eu sou</p>
                </motion.div>

                <motion.div 
                    class="text_2"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    <p>Gabriel Mazzuco</p>
                </motion.div>

                <motion.div class="text_3"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    <p>Desenvolvedor Back e Front-end</p>
                </motion.div>
                
                <motion.div class="text_4"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 3 }}
                >
                    <p>
                        Sou um graduando em Ciencias da Computação pela Universidade Estadual do Oeste do Paraná (UNIOESTE).
                        Tenho experiência com desenvolvimento de software, tanto na parte de front-end quanto na parte de back-end.
                    </p>
                </motion.div>

                <motion.div 
                    class="lado_esquerdo_botoes"
                    initial={{ y: +500 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2 }}
                    
                > 
                    
                    
                    <a href="https://www.instagram.com/gabriel_mazzuco11/" class="button_instagram" target="_blank">
                        <FaInstagram className="media_icons"/>
                        <p class="text">Instagram</p>
                    </a>

                    <a href="https://www.linkedin.com/in/gabriel-alves-mazzuco/" class="button_linkedin" target="_blank">
                        <FaLinkedinIn className="media_icons"/>
                        <p class="text">Linkedin</p>
                    </a>

                    <a href="https://github.com/gabrielmazz" class="button_github" target="_blank">
                        <FaGithub className="media_icons"/>
                        <p class="text">Github</p>
                    </a>
                                    
                </motion.div>

            </div>

            {/* Lado direito, imagem */}
            <motion.div class="photo"
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
            
            >
                <div class="image_card">
                    <img src='https://i.imgur.com/yrmvRt5.jpg' alt="Perfil"/>
                </div>
            </motion.div>

        </div>
    )
}

export default Home