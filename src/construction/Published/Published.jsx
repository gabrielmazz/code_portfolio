import React from "react";
import './Published.css'

import { FaPython } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { FaPerson } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiSlideshow2Line } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { CgGames } from "react-icons/cg";

const Published = () => {
    return (

        <div class="font-body">

            <div  class="title_title_published text-white">
                        
                <p class="menu__link_title">Trabalhos publicados</p>
        
            </div>
            
            
            <div class="container_card">
                
                 <div class="card_published">
                    
                    <div class="image_published">

                        <img src='https://i.imgur.com/CBQgcLU.png' alt="Project 1" 
                            style={{width: "100%", height: "100%", objectFit: 'cover'}}/>

                    </div>
                    
                    <div class="content_published">
                        <a href="#">
                        
                        <span class="title_published">
                            TCC - Dinâmicas Digitais: Uma Análise Descritiva dos Impactos Sociais dos Jogos Eletrônicos na Sociedade Contemporânea
                        </span>
                        </a>

                        <p class="desc_published h-44">

                            A indústria dos videogames é reconhecida como a maior no setor de entretenimento, devido ao
                            grande número de adeptos e ao significativo montante financeiro envolvido. Esse fato não apenas
                            demonstra a viabilidade do mercado de jogos eletrônicos, mas também ressalta a necessidade de
                            compreender adequadamente o meio para contribuir com a formação profissional. Neste trabalhou
                            buscou-se entender os motivos pelos quais as pessoas apreciam jogar videogames, explorando
                            desde a busca por escapismo até a diversão, a competitividade e outros possíveis fatores. O
                            objetivo principal foi analisar esse fenômeno por meio da aplicação de um questionário, que
                            permitiu a mensuração e inferência de informações relevantes. Além disso, foram empregados
                            métodos de análise que incluem estatísticas descritivas e técnicas de Aprendizado de Máquina,
                            para obter uma compreensão mais aprofundada dos dados coletados. Foram coletadas 183
                            respostas ao questionário, quantidade considerada satisfatório.
                        </p>

                        <div class="icons_alternate">

                            <section class="flex justify-center items-center">
                                <button
                                    class="group icons_in_card bg-gradient-to-r from-yellow-python_1
                                    to-yellow-python_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                    duration-500 hover:from-[#fde047] hover:to-[#fbbf24]"
                                    href="/"
                                >
                                    <FaPython className="icons_in_card_size" color="white" 
                                />

                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Python
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-sky_purple_1
                                    to-sky_purple_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                    duration-500 hover:from-[#7f00ff] hover:to-[#5d008d]"
                                    href="/"
                                >
                                    <DiVisualstudio className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    VS Basic
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-clair_green_1
                                    to-clair_green_1 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                    duration-500 hover:from-[#86efac] hover:to-[#4ade80]"
                                    href="/"
                                >
                                    <FaPerson className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Pessoas
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-purple_blue_1
                                    to-purple_blue_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                    duration-500 hover:from-[#818cf8] hover:to-[#6366f1]"
                                    href="/"
                                >
                                    <FaWpforms className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Formulários
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-green-grass_1
                                     to-green-grass_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                      duration-500 hover:from-[#84cc16] hover:to-[#65a30d]"
                                    href="/"
                                >
                                    <SiMicrosoftexcel className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Excel
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-red_1
                                     to-red_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                      duration-500 hover:from-[#ff453a] hover:to-[#e73827]"
                                    href="/"
                                >
                                    <RiSlideshow2Line className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Slides
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-pink_1
                                     to-pink_2 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                      duration-500 hover:from-[#d946ef] hover:to-[#c026d3]"
                                    href="/"
                                >
                                    <AiFillDatabase className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Database
                                </span>

                                </button>
                            </section>

                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-sky-blue_1
                                     to-purple_1 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all
                                      duration-500 hover:from-[#00b4ff] hover:to-[#bf5af2]"
                                    href="/"
                                >
                                    <CgGames className="icons_in_card_size" color="white" 
                                />
                                
                                <span
                                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    Jogos
                                </span>

                                </button>
                            </section>

                        </div>

                        <a class="action" href="https://www.linkedin.com/in/gabriel-alves-mazzuco/overlay/projects/1696580421/multiple-media-viewer/?profileId=ACoAADIw7UABf093tGr8_egHdfWlLqCP7Fr9zHI&treasuryMediaId=1721830984020&type=DOCUMENT">
                            Descubra mais
                        <span aria-hidden="true">
                            →
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Published;
