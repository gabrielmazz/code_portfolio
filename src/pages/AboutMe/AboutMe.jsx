import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import Cards from "./Cards";
import Loader from "./../../../src/construction/Loader/Loader"
import Loading from "./../LoadingPage/LoadingPage"

import "./AboutMe.css";

const AboutMe = () => {

    
    // Lógica para a página de Loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulando um tempo de carregamento
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    // Instancia aonde contem as informações que serão passadas para o componente Cards
    const experiences = [
        
        {
            title: "Professor de informática para crianças e adolescentes",
            subtitle: "Agosto de 2022 - Julho de 2024",
            description:
                "Neste projeto (A busca da formação integral de adolescentes que habitam as periferias e bolsões de miséria em Cascavel/PR através da saúde, do meio ambiente, da cultura e da tecnologia), fui responsável por ministrar aulas de informática para crianças e adolescentes em situação de baixa renda na cidade de Cascavel. Utilizando computadores fornecidos pela universidade, realizamos aulas todos os sábados para essas pessoas, abordando desde o básico, como o uso de um computador e celular, até conteúdos mais avançados, como o uso do Microsoft Office.",
            icons: [
                { "name": "SiMicrosoftword", "description": "Word", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" },
                { "name": "SiMicrosoftexcel", "description": "Excel", "color_1": "green-grass_1", "color_2": "green-grass_2", "code_color_1" : "#84cc16", "code_color_2" : "#65a30d" },
                { "name": "SiMicrosoftpowerpoint", "description": "PowerPoint", "color_1": "red_3", "color_2": "red_4", "code_color_1" : "#F02E2E", "code_color_2" : "#B71C1C" },
                { "name": "IoHardwareChipOutline", "description": "Hardware", "color_1": "red_1", "color_2": "red_2", "code_color_1" : "#ff453a", "code_color_2" : "#e73827" },
                { "name": "CgSoftwareDownload", "description": "Software", "color_1": "green-grass_1", "color_2": "sky-blue_1", "code_color_1" : "#84cc16", "code_color_2" : "#00b4ff" },
                { "name": "SiMicrosoft", "description": "Windows", "color_1": "blue-ocean_1", "color_2": "blue-ocean_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" },
                { "name": "FaLinux", "description": "Linux", "color_1": "yellow_2", "color_2": "yellow-python_1", "code_color_1" : "#8e8e93", "code_color_2" : "#ffab40" },
            ]
        },

        {
            title: "Professor de informática para adultos e idosos",
            subtitle: "Abril de 2022 - Março de 2024",
            description:
                "Neste projeto (Noções Básicas de informática), fui responsável por ministrar aulas de informática para cuidadores de idosos e adultos na cidade de Cascavel. Utilizando computadores fornecidos pela universidade, realizamos aulas todos os sábados para essas pessoas, abordando desde o básico, como o uso de um computador e celular, até conteúdos mais avançados, todos pedidos pelos próprios alunos",
            icons: [
                { "name": "SiMicrosoftword", "description": "Word", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" },
                { "name": "SiMicrosoftexcel", "description": "Excel", "color_1": "green-grass_1", "color_2": "green-grass_2", "code_color_1" : "#84cc16", "code_color_2" : "#65a30d" },
                { "name": "SiMicrosoftpowerpoint", "description": "PowerPoint", "color_1": "red_3", "color_2": "red_4", "code_color_1" : "#F02E2E", "code_color_2" : "#B71C1C" },
                { "name": "CgSoftwareDownload", "description": "Software", "color_1": "green-grass_1", "color_2": "sky-blue_1", "code_color_1" : "#84cc16", "code_color_2" : "#00b4ff" },
                { "name": "SiMicrosoft", "description": "Windows", "color_1": "blue-ocean_1", "color_2": "blue-ocean_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" },
                { "name": "GiSmartphone", "description": "Celulares", "color_1": "sky_purple_1", "color_2": "sky_blue_3", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
            ]
        },

        {
            title: "Professor de informática para adolescentes",
            subtitle: "Março de 2021 - Fevereiro de 2023",
            description:
                "Neste projeto (Software livre como ferramenta para inclusão digital de adolescentes), fui responsável por ministrar aulas de informática para adolescentes cidade de Cascavel. Utilizando computadores fornecidos pela universidade, realizamos aulas todos os sábados para estes jovens, abordando desde o básico, como o uso de um computador e celular, até conteúdos mais avançados envolvendo o uso de softwares livres",
            icons: [
                { "name": "MdOutlineFeed", "description": "WPS", "color_1": "red_2", "color_2": "orange_1", "code_color_1" : "#e73827", "code_color_2" : "#ff9f0a" },
                { "name": "CgSoftwareDownload", "description": "Software", "color_1": "green-grass_1", "color_2": "sky-blue_1", "code_color_1" : "#84cc16", "code_color_2" : "#00b4ff" },
                { "name": "FaLinux", "description": "Linux", "color_1": "yellow_2", "color_2": "yellow-python_1", "code_color_1" : "#8e8e93", "code_color_2" : "#ffab40" },
                { "name": "GiSmartphone", "description": "Celulares", "color_1": "sky_purple_1", "color_2": "sky_blue_3", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
            ]
        },

        {
            title: "Garçom do Siri Cascudo",
            subtitle: "Janeiro de 2017 - Abril de 2018",
            description:
                "Contando como uma experiência, mesmo fora do âmbito da computação, trabalhei como garçom no restaurante Siri Cascudo, que foi meu primeiro emprego. Lá, fui responsável por atender os clientes, anotar os pedidos e realizar outras tarefas relacionadas.",
            icons: [
                { "name": "FaPerson", "description": "Pessoas", "color_1": "clair_green_1", "color_2": "clair_green_2", "code_color_1" : "#86efac", "code_color_2" : "#4ade80" },
                { "name": "GiSmartphone", "description": "Celulares", "color_1": "sky_purple_1", "color_2": "sky_blue_3", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
            ]
        },

    ];


    const certifications = [

        {
            title: "XXIII SEU e 3º SIEPEX",
            subtitle: "Abril de 2024",
            description:
                "XXIII SEU e 3º SIEPEX - Unioeste e Comunidade: Integração, inclusão e transformação social., promovido pela Unioeste Campus de Foz do Iguaçu, Pró-Reitoria de Extensão, e Pró-Reitoria de Graduação, projeto que visa a integração da universidade com a comunidade, promovendo a inclusão e transformação social.",
            icons: [
                { "name": "FaPerson", "description": "Pessoas", "color_1": "clair_green_1", "color_2": "clair_green_2", "code_color_1" : "#86efac", "code_color_2" : "#4ade80" },
                { "name": "RiSlideshow2Line", "description": "Slides", "color_1": "red_1", "color_2": "red_2", "code_color_1" : "#ff453a", "code_color_2" : "#e73827" },
                { "name": "GrIntegration", "description": "Integração", "color_1": "purple_blue_1", "color_2": "red_1", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
            ]
        },

        {
            title: "Ação UNIOESTE no Espaço Impulso com a carga",
            subtitle: "Setembro de 2022",
            description:
                "Ação UNIOESTE no Espaço Impulso com a carga, promovido pela Unioeste Campus de Foz do Iguaçu, projeto que visa uma ideia de como uma Startup pode ser criada e como ela pode ser desenvolvida, desde a ideia até a execução. Como exemplo, foi usada uma Startup que está sendo subsidiada pela COOPAVEL.", 
            icons: [
                { "name": "FaPerson", "description": "Pessoas", "color_1": "clair_green_1", "color_2": "clair_green_2", "code_color_1" : "#86efac", "code_color_2" : "#4ade80" },
                { "name": "RiSlideshow2Line", "description": "Slides", "color_1": "red_1", "color_2": "red_2", "code_color_1" : "#ff453a", "code_color_2" : "#e73827" },
                { "name": "FaCode", "description": "StartUp", "color_1": "orange_1", "color_2": "sky_purple_2", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
            ]
        },

        {
            title: "Acelerando kernels de Machine Learning em processadores multicore e vetorial",
            subtitle: "Abril de 2022",
            description:
                "Acelerando kernels de Machine Learning em processadores multicore e vetorial foi um minicurso promovido pela Sociedade Brasileira de Computação, que visa ensinar como melhorar nossos códigos, por meio da computação paralela usando processadores multicore e vetoriais, utilizando a linguagem de programação C e a biblioteca OpenMP.",
            icons: [
                { "name": "C" , "description": "C", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" },
                { "name": "SiAssemblyscript", "description": "Assembly", "color_1": "black_green_1", "color_2": "black_green_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" },
            ]
        },

        {
            title: "Computação de Alto Desempenho em Julia",
            subtitle: "Abril de 2022",
            description:
                "Computação de Alto Desempenho em Julia foi um minicurso promovido pela Sociedade Brasileira de Computação, que visa ensinar como a linguagem de programação Julia pode ser utilizada para computação de alto desempenho, sendo bem parecida com o C, mas tendo um foco maior em computação paralela.",
            icons: [
                { "name": "SiJulia", "description": "Julia", "color_1": "sky_purple_1", "color_2": "sky_purple_2", "code_color_1" : "#7f00ff", "code_color_2" : "#5d008d" },
               
            ]
        },

        {
            title: "Programe sua GPU com OpenMP",
            subtitle: "Abril de 2022",
            description:
                "Programe sua GPU com OpenMP foi um minicurso promovido pela Sociedade Brasileira de Computação, que visa ensinar como utilizar a nossa GPU para realizar códigos paralelos, utilizando a linguagem de programação C.",
            icons: [
                { "name": "C" , "description": "C", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" },
            ]
        },

        {
            title: "MARATONA EMPREENDEDORA: programa de inovação e empreendedorismo na Unioeste",
            subtitle: "Setembro de 2020 - Fevereiro de 2021",
            description:
                "MARATONA EMPREENDEDORA: programa de inovação e empreendedorismo na Unioeste, promovido pela Unioeste Campus de Cascavel, foi um projeto aonde eu (Ciêntista da Computação) e outros três amigos, um de Medicina e os outros dois de Farmácia, criamos os fundamentos de um aplicativo chamado 'Farmagenda', que visa facilitar a vida de médicos/farmacêuticos e pacientes, sendo um aplicativo de agendamento de consultas e de lembretes de medicamentos.",
            icons: [
                { "name": "FaCode", "description": "StartUp", "color_1": "orange_1", "color_2": "sky_purple_2", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
                { "name": "GiSmartphone", "description": "Celulares", "color_1": "sky_purple_1", "color_2": "sky_blue_3", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
                { "name": "FaPerson", "description": "Pessoas", "color_1": "clair_green_1", "color_2": "clair_green_2", "code_color_1" : "#86efac", "code_color_2" : "#4ade80" },
                { "name": "RiSlideshow2Line", "description": "Slides", "color_1": "red_1", "color_2": "red_2", "code_color_1" : "#ff453a", "code_color_2" : "#e73827" },
                { "name": "GrIntegration", "description": "Integração", "color_1": "purple_blue_1", "color_2": "red_1", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
                { "name": "GiRemedy", "description": "Medicina", "color_1": "red_1", "color_2": "clair_green_1", "code_color_1" : "#ff453a", "code_color_2" : "#86efac" },
                { "name": "GiMedicines", "description": "Farmácia", "color_1": "blue_3", "color_2": "pink_2", "code_color_1" : "#7f00ff", "code_color_2" : "#4adaf0" },
                
            ]
        },


        
    ];

    return (
        
        <div className="container_aboutme">
            
            <motion.div 
                class="title_about text-white font-body title_size"
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <p class="menu__link_title">Mais sobre mim</p>
            </motion.div>
            
            <motion.div className="text-about-aboutme"
                initial={{ opacity: 0, x: +1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}  
                  
            >

                <p className="text-white font-body">

                    Contando um pouco mais sobre mim, tive uma formação no Ensino Médio (2015 - 2017) no colégio Anglo em Cascavel, ainda sem conhecer muito sobre programação mas sempre tive na minha cabeça que gostaria de ter uma formação academica na área. Logo depois prestei vestibular 
                    para Ciências da Computação na Unioeste, e acabei sendo reprovadom então entrei em um cursinho pré-vestibular DeltaH (2018), prestando novamente o vestibular/ENEM, conseguindo a aprovação. Em 2019 comecei a faculdade mesmo não sabendo quase nada sobre programação e desde
                    então é a minha área de atuação.

                </p>
                
            </motion.div>
            

            <div className="grid_experiences_complements">
                <div class="timeline">
                    <motion.div 
                        class="title_aboutme text-white font-body ajusts_aboutme_cards"
                        initial={{ opacity: 0, x: -1500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2}}
                    >
                        <p class="menu__link_title">Experiência </p>
                    </motion.div>

                    <motion.div 
                        class="outer"
                        initial={{ opacity: 0, x: -1500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5}}
                    >
                        
                        <Cards struct={experiences[0]} />

                        <Cards struct={experiences[1]} />

                        <Cards struct={experiences[2]} />

                        <Cards struct={experiences[3]} />

                    </motion.div>
                </div>

                <div class="timeline">
                    <motion.div 
                        class="title_aboutme text-white font-body ajusts_aboutme_cards"
                        initial={{ opacity: 0, x: +1500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2}}
                    >
                        <p class="menu__link_title">Certificados</p>
                    </motion.div>

                    <motion.div 
                        className="outer"
                        initial={{ opacity: 0, x: +1500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5}}
                    
                    >
                            
                            <Cards struct={certifications[0]} />

                            <Cards struct={certifications[1]} />

                            <Cards struct={certifications[2]} />

                            <Cards struct={certifications[3]} />

                            <Cards struct={certifications[4]} />

                            <Cards struct={certifications[5]} />
                    </motion.div>
                </div>
            </div>

            <Loader />

        </div>
    );
};

export default AboutMe;
