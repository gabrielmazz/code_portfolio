import React from 'react'

import './Home.css'

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {

    return (
        
        <div class="container_home text-white font-body">

            {/* Lado esquerdo, texto de apresentação */}
            <div class="lado_esquerdo">

                <div >
                    <p class="text_1 slide-in-left">Olá, eu sou</p>
                </div>

                <div class="text_2 slide-in-left">
                    <p>Gabriel Mazzuco</p>
                </div>

                <div class="text_3 slide-in-left">
                    <p>Desenvolvedor Back e Front-end</p>
                </div>
                
                <div class="text_4 slide-in-bottom">
                    <p>
                        Sou um graduando em Ciencias da Computação pela Universidade Estadual do Oeste do Paraná (UNIOESTE).
                        Tenho experiência com desenvolvimento de software, tanto na parte de front-end quanto na parte de back-end.
                    </p>
                </div>

                <div class="lado_esquerdo_botoes slide-in-bottom"> 
                    
                    
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
                                    
                </div>

            </div>

            {/* Lado direito, imagem */}
            <div class="photo slide-in-right">
                <div class="image_card">
                    <img src='https://i.imgur.com/yrmvRt5.jpg' alt="Perfil"/>
                </div>
            </div>

        </div>
    )
}

export default Home