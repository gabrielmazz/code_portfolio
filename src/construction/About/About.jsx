import React from 'react'

import './About.css'

const About = () => {

    return (

        <>
        
          
            <div  class="title_about text-white font-body">
                        
                <p class="menu__link_title">Sobre mim</p>
                
            </div>

            <div class="container_about text-white">
                

                <div class="container_about_container">
                    
                    <div class="container">
                        <div class="skill-box">
                            <span class="title">Python</span>

                            <div class="skill-bar">
                                <span class="skill-per python">
                                    <span class="tooltip">80%</span>
                                </span>
                            </div>
                        </div>

                        <div class="skill-box">
                            <span class="title">C</span>

                            <div class="skill-bar">
                                <span class="skill-per c">
                                    <span class="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <span class="title">C++</span>

                            <div class="skill-bar">
                                <span class="skill-per c_plus_plus">
                                    <span class="tooltip">50%</span>
                                </span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <span class="title">Javascript</span>

                            <div class="skill-bar">
                                <span class="skill-per javascript">
                                    <span class="tooltip">50%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="skill-box">
                            <span class="title">React | Vite</span>

                            <div class="skill-bar">
                                <span class="skill-per react">
                                    <span class="tooltip">60%</span>
                                </span>
                            </div>
                        </div>

                        <div class="skill-box">
                            <span class="title">HTML</span>

                            <div class="skill-bar">
                                <span class="skill-per html">
                                    <span class="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <span class="title">CSS</span>

                            <div class="skill-bar">
                                <span class="skill-per css">
                                    <span class="tooltip">60%</span>
                                </span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <span class="title">Visual Basic | Excel</span>

                            <div class="skill-bar">
                                <span class="skill-per visualbasic">
                                    <span class="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="container_about_text">


                    <div class="container_about_text_p font-body">

                        <p>
                            Tenho um forte compromisso em alcançar resultados concretos nos projetos em que me envolvo. Com uma base em diversas áreas da computação, 
                            como programação, algoritmos, redes, processamento de imagens e tudo mais. Com boas habilidades de relacionamento 
                            interpessoal, capaz de apoiar a equipe em tarefas diversas e colaborar efetivamente com a rotina de trabalho, 
                            prestando um serviço de excelência
                        </p>

                    </div>

                    <div class="container_about_text_p_info font-body">

                        <div class="container_about_text_p_info_div">
                            <p class="container_about_text_p_info_p">Idade:</p>
                            <p class="container_about_text_p_info_p_2">24</p>
                        </div>

                        <div class="container_about_text_p_info_div">
                            <p class="container_about_text_p_info_p">Endereço:</p>
                            <p class="container_about_text_p_info_p_2">Cascavel - Paraná</p>
                        </div>

                        <div class="container_about_text_p_info_div">
                            <p class="container_about_text_p_info_p">Telefone:</p>
                            <p class="container_about_text_p_info_p_2">+55 (45) 991297477</p>
                        </div>

                        <div class="container_about_text_p_info_div">
                            <p class="container_about_text_p_info_p">Email:</p>
                            <p class="container_about_text_p_info_p_2">gabrielalvesmazzuco@hotmail.com</p>
                        </div>

                    </div>
                    

                </div>

            </div>
        </>
    )
}

export default About