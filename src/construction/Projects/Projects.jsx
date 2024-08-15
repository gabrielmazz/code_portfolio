import React, { useState } from 'react'
import { motion } from "framer-motion";
import './Projects.css'

import Cards from './Cards'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Projects = () => {

    const projects = [

        {
            "img": "https://github.com/gabrielmazz/software-render/raw/main/img/wireframe.png",
            "title": "Software Render e Wireframe",
            "description": "Neste trabalho foi desenvolvido um algoritmo de renderização de polígonos 3D, utilizando a linguagem de programação Python e a biblioteca tkinter. Primeiramento foi realizado a coleta dos pontos num ambiente 2D chamado de Wireframe, posteriormente foi realizado a revolução do objeto em torno de um eixo, gerando um objeto em 3D",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiGnubash", "description": "Bash", "color_1": "blue-ocean_1", "color_2": "blue-ocean_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" }
            ],
            "link": "https://github.com/gabrielmazz/software-render",
        },

        {
            "img" : "https://github.com/gabrielmazz/fill-poly-python/raw/main/img/img_triangulo_teste.png",
            "title": "Fill Poly",
            "description": "O algoritmo de Fill Poly é um algoritmo de preenchimento de polígonos, que consiste em preencher um polígono com uma cor sólida, a partir de um ponto inicial. O algoritmo é baseado no algoritmo de Scanline, que consiste em preencher uma linha horizontal, a partir de um ponto inicial, até um ponto final.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiGnubash", "description": "Bash", "color_1": 'blue-ocean_1', "color_2": "blue-ocean_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" }
            ],
            "link": "https://github.com/gabrielmazz/fill-poly-python"
        },

        {
            "img" : "https://instrutoraugustodesa.com.br/wp-content/uploads/2024/03/compilador.png",
            "title": "Compilador",
            "description": "Neste trabalho, a ideia é resolver os desafios propostos para a realização de um compilador ou interpretador de uma Linguagem de Programação. Tudo que foi implementado neste compilador, são os métodos passados na matéria de Compiladores do 4 ano de Ciências da Computação da Universidade Estadual do Oeste do Paraná (UNIOESTE). O trabalho foi realizado durante todo o ano letivo da matéria sendo divido em três partes, sendo a implementação do Analisador Léxico, Analisador Sintático e por fim, o Analisador Semântico.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiMicrosoftexcel", "description": "Excel", "color_1": "green-grass_1", "color_2": "green-grass_2", "code_color_1" : "#84cc16", "code_color_2" : "#65a30d" }
            ],
            "link": "https://github.com/gabrielmazz/linguagem-do-amor-compiladores-"
        },

        {
            "img" : "https://i.pinimg.com/originals/97/e0/bd/97e0bdf761c1dabdb5979778aa89a54f.jpg",
            "title": "Sistema Fuzzy - Hardware",
            "description": "Esse sistema tem como objetivo auxiliar pessoas, de qualquer nível de conhecimento, a ter nocão do quão bem suas maquinas desempenham baseado no valor da memória RAM, placa gráfica e processador, coompreendendo a influencia da memoria RAM, GPU e CPU no desempenho geral do sistema e fundamental nesse contexto.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "IoHardwareChipOutline", "description": "Hardware", "color_1": "red_1", "color_2": "red_2", "code_color_1" : "#ff453a", "code_color_2" : "#e73827" }
            ],
            "link": "https://github.com/gabrielmazz/Sistema-Fuzzy---Pontuacao-sobre-um-computador"
        },

        {
            "img" : "https://f.hubspotusercontent20.net/hubfs/2604929/algoritmos-geneticos-y-sus-aplicaciones-1.jpg",
            "title": "Algoritmo Genético Binário",
            "description": "Algoritmos genéticos são uma técnica de otimização que utiliza conceitos da teoria da evolução de Darwin para encontrar soluções para problemas complexos. Eles são baseados em uma população de indivíduos que representam possíveis soluções para o problema em questão. Cada indivíduo é representado por um cromossomo, que é uma sequência de genes. Os genes são os parâmetros que definem a solução proposta pelo indivíduo.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiJupyter", "description": "Jupyter", "color_1": "orange_1", "color_2": "orange_2", "code_color_1" : "#ff9f0a", "code_color_2" : "#d6703f" }
            ],
            "link": "https://github.com/gabrielmazz/algoritmo-genetico-binario"
        },

        {
            "img" : "https://camo.githubusercontent.com/922d5745cbc88ec50df7c6170eb3046b20ceeb86681d6797c184d37cf688bf1a/68747470733a2f2f692e696d6775722e636f6d2f736541456148432e706e67",
            "title": "Eternal Light - RPG de mesa com IA",
            "description": "Este jogo tem como objetivo simular um RPG de Mesa, como o Roll20 e o Dnd 5e, utilizando técnicas de inteligência artificial com máquina de estado. Este jogo irá permitir que os jogadores possam controlar seus personagens e realizar ações em turnos, assim como em um jogo de RPG tradicional. Além disso, o programa será capaz de rolar dados e calcular as consequências das ações dos personagens, como ataques e defesas, utilizando algoritmos de inteligência artificial para garantir a fair-play e uma experiência de jogo enriquecedora.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiAdobephotoshop", "description": "Photoshop", "color_1": "blue_1", "color_2": "blue_2", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" }
            ],
            "link": "https://github.com/gabrielmazz/eternal_light-rpg-de-mesa"
        },

        {
            "img" : "https://www.datocms-assets.com/41207/1627941441-header.jpg",
            "title": "Comparação entre TCP e UDP",
            "description": "O objetivo deste projeto é avaliar o desempenho do TCP e UDP para transferência de arquivos em redes de computadores. O protocolo TCP é confiável e garante a entrega de pacotes, enquanto o UDP não possui essa garantia. Para garantir a entrega de pacotes no UDP, foi utilizado um protocolo com confirmação do tipo pare-e-espere.",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" }
            ],
            "link": "https://github.com/gabrielmazz/Comparacao-de-desempenho-do-TCP-e-do-UDP"
        },

        {
            "img" : "https://github.com/gabrielmazz/gerador-de-hex-e-rgb/raw/main/img/background.png",
            "title": "Gerador de HEX e RGB usando React + Vite",
            "description": "Este projeto foi desenvolvido com o intuito de praticar e aprender mais sobre React e Vite. O projeto consiste em um gerador de cores HEX e RGB, onde o usuário pode escolher gerar uma cor aleatória apenas clicando em um botão.",
            "icons": [
                { "name": "FaReact", "description": "React", "color_1": "sky-blue_1", "color_2": "sky-blue_2", "code_color_1" : "#00b4ff", "code_color_2" : "#0082b2" },
                { "name": "SiVite", "description": "Vite", "color_1": "purple_1", "color_2": "yellow-python_1", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" },
                { "name": "IoLogoJavascript", "description": "JavaScript", "color_1": "yellow_1", "color_2": "yellow_2", "code_color_1" : "#ffcc00", "code_color_2" : "#ffab40" },
                { "name": "RiTailwindCssFill", "description": "Tailwind", "color_1": "sky-blue_1", "color_2": "sky-green_1", "code_color_1" : "#00b4ff", "code_color_2" : "#0ed145" }
            ],
            "link": "https://github.com/gabrielmazz/gerador-de-hex-e-rgb"            
        },

        {
            "img" : "https://github.com/gabrielmazz/api-de-procura-por-usuarios-do-github/raw/main/src/assets/img_readme/image.png",
            "title": "API de procura por usuários do GITHUB",
            "description": "Este projeto foi desenvolvido com o intuito de aprimorar meus conhecimentos em desenvolvimento web, utilizando a linguagem de programação JavaScript e a biblioteca ReactJS. A aplicação é uma API de procura por usuários do GITHUB, onde é possível pesquisar por usuários e visualizar informações sobre o mesmo.",
            "icons": [
                { "name": "FaReact", "description": "React", "color_1": "sky-blue_1", "color_2": "sky-blue_2", "code_color_1" : "#00b4ff", "code_color_2" : "#0082b2" },
                { "name": "SiVite", "description": "Vite", "color_1": "purple_1", "color_2": "yellow-python_1", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" },
                { "name": "IoLogoJavascript", "description": "JavaScript", "color_1": "yellow_1", "color_2": "yellow_2", "code_color_1" : "#ffcc00", "code_color_2" : "#ffab40" },
                { "name": "RiTailwindCssFill", "description": "Tailwind", "color_1": "sky-blue_1", "color_2": "sky-green_1", "code_color_1" : "#00b4ff", "code_color_2" : "#0ed145" },
                { "name": "SiShadcnui", "description": "Shadcn", "color_1": "black_1", "color_2": "black_2", "code_color_1" : "#000000", "code_color_2" : "#333333" }
            ],
            "link": "https://github.com/gabrielmazz/api-de-procura-por-usuarios-do-github"
        },

        {
            "img" : "https://github.com/gabrielmazz/software-render-Scratch-/raw/main/img/sniper.png",
            "title": "Software Render usando Scratch",
            "description" : "Este trabalho foi uma primeira versão do Software Render sendo implementado usando o Python e a biblioteca pygame. Primeiramente foi realizado a coleta dos pontos num ambiente 2D chamado de Wireframe, posteriormente foi realizado a revolução do objeto em torno de um eixo, gerando um objeto em 3D",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
                { "name": "SiNumba", "description": "Numba", "color_1": "sky_blue_3", "color_2": "sky_blue_4", "code_color_1" : "#4adaf0", "code_color_2" : "#0aabc4" }
            ],
            "link" : "https://github.com/gabrielmazz/software-render-Scratch-"
        },

        {
            "img" : "https://github.com/gabrielmazz/Problema-do-caixeiro-viajante-com-busca-tabu/raw/main/img/img2.png",
            "title": "Problema do Caixeiro Viajante com Busca Tabu",
            "description": "O Problema do Caixeiro Viajante (PCV) é um problema clássico de otimização combinatória que consiste em encontrar o menor caminho que passa por todos os vértices de um grafo, visitando cada vértice uma única vez e retornando ao vértice de origem. O PCV é um problema NP-difícil, o que significa que não se conhece um algoritmo polinomial que resolva o problema de forma exata em tempo polinomial",
            "icons": [
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
            ],
            "link": "https://github.com/gabrielmazz/Problema-do-caixeiro-viajante-com-busca-tabu"
        },

        {
            "img": "https://cdn.ttgtmedia.com/rms/onlineImages/TT_tree_mobile.jpg",
            "title": "Shalom File System",
            "description": "Este trabalho é uma implementação de um sistema de arquivos baseado num sistema Ext2. A implementação é com base na alocação contígua e gerenciamento de setores livres com lista ligada, o Shalom File System é um sistema de arquivos desenvolvido como parte do trabalho de Sistemas de Arquivos na matéria de Sistemas Operacionais.",
            "icons": [
                { "name": "C" , "description": "C", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" }
            ],
            "link": "https://github.com/gabrielmazz/sistema-de-arquivos"
        },

        {
            "img": "https://novaacademmia.wordpress.com/wp-content/uploads/2020/02/helloworldasm-1.png?w=667",
            "title" : "Calculo de raiz quadrada com vários pontos",
            "description": "Este programa foi desenvolvido durante o exame de Linguagem de Montagem aonde deveria programar um software em Assembly, a ideia era criar dois vetores, aonde recebera os valores dos primeiros pontos e depois dos próximos. Os valores de entrada, deve ser valores ponto-flutuante de precisão dupla Usando uma função chamada dis3Dlm com passagem de parametro por ponteiro. Com limtações impostas pelo professor para que uséssemos funções externas do C", 
            "icons":[
                { "name": "SiAssemblyscript", "description": "Assembly", "color_1": "black_green_1", "color_2": "black_green_2", "code_color_1" : "#0083ca", "code_color_2" : "#005696" },
                { "name": "C" , "description": "C", "color_1": "blue_3", "color_2": "blue_4", "code_color_1" : "#0a3aa8", "code_color_2" : "#041f5e" }
            ],
            "link": "https://github.com/gabrielmazz/Exame-LM"
            
        },

        {
            "img": "https://static.escolakids.uol.com.br/conteudo_legenda/c15374255f16230a12fab7c8d89eee4e.jpg",
            "title" : "API de busca por CEP",
            "description": "Este projeto foi o primeiro projeto em React que eu desenvolvi. O intuito de aprimorar meus conhecimentos em Javascript e em APIs, utilizando o React + Vite. O algoritmo busca por um CEP informado pelo usuário e retorna o endereço correspondente.", 
            "icons":[
                { "name": "FaReact", "description": "React", "color_1": "sky-blue_1", "color_2": "sky-blue_2", "code_color_1" : "#00b4ff", "code_color_2" : "#0082b2" },
                { "name": "SiVite", "description": "Vite", "color_1": "purple_1", "color_2": "yellow-python_1", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" },
                { "name": "IoLogoJavascript", "description": "JavaScript", "color_1": "yellow_1", "color_2": "yellow_2", "code_color_1" : "#ffcc00", "code_color_2" : "#ffab40" },
            ],
            "link": "https://github.com/gabrielmazz/buscador-de-cep"
        },
        
        {
            "img": "https://i.imgur.com/aKnj4Ox.png",
            "title" : "Portfólio",
            "description": "Este projeto representou o meu primeiro grande trabalho usando o React, com o objetivo de demonstrar um pouco dos meus conhecimentos sobre as tecnologias com as quais já havia trabalhado, desta vez aplicadas em uma escala maior. Durante o desenvolvimento do portfólio, utilizei uma variedade de tecnologias, incluindo rotas e animações, além de outros recursos avançados que enriqueceram a experiência do usuário. Esse projeto não só me permitiu aprimorar minhas habilidades técnicas, como também explorar novas possibilidades e desafios no campo da programação.",
            "icons":[
                { "name": "FaReact", "description": "React", "color_1": "sky-blue_1", "color_2": "sky-blue_2", "code_color_1" : "#00b4ff", "code_color_2" : "#0082b2" },
                { "name": "SiVite", "description": "Vite", "color_1": "purple_1", "color_2": "yellow-python_1", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" },
                { "name": "IoLogoJavascript", "description": "JavaScript", "color_1": "yellow_1", "color_2": "yellow_2", "code_color_1" : "#ffcc00", "code_color_2" : "#ffab40" },
                { "name": "RiTailwindCssFill", "description": "Tailwind", "color_1": "sky-blue_1", "color_2": "sky-green_1", "code_color_1" : "#00b4ff", "code_color_2" : "#0ed145" },
                { "name": "SiShadcnui", "description": "Shadcn", "color_1": "black_1", "color_2": "black_2", "code_color_1" : "#000000", "code_color_2" : "#333333" },
                { "name": "FaGithub", "description": "GitHub", "color_1": "gray_1", "color_2": "black_1", "code_color_1" : "#8e8e93", "code_color_2" : "#000000" },

            ],
            "link": "https://github.com/gabrielmazz/code_portfolio"
        },

        {
            "img": "https://www.unisuam.edu.br/wp-content/uploads/2021/04/qual-e-o-papel-do-nutricionista.jpg",
            "title" : "Software para Nutricionistas",
            "description": "Este projeto ainda está em desenvolvimento, mas a ideia é que ele sirva como uma interface para que o nutricionista insira as informações necessárias. Como retorno, a plataforma fornecerá os valores precisos, facilitando o trabalho do profissional e garantindo a qualidade do atendimento.",
            "icons":[
                { "name": "FaReact", "description": "React", "color_1": "sky-blue_1", "color_2": "sky-blue_2", "code_color_1" : "#00b4ff", "code_color_2" : "#0082b2" },
                { "name": "SiVite", "description": "Vite", "color_1": "purple_1", "color_2": "yellow-python_1", "code_color_1" : "#0a84ff", "code_color_2" : "#0067b8" },
                { "name": "IoLogoJavascript", "description": "JavaScript", "color_1": "yellow_1", "color_2": "yellow_2", "code_color_1" : "#ffcc00", "code_color_2" : "#ffab40" },
                { "name": "RiTailwindCssFill", "description": "Tailwind", "color_1": "sky-blue_1", "color_2": "sky-green_1", "code_color_1" : "#00b4ff", "code_color_2" : "#0ed145" },
                { "name": "SiShadcnui", "description": "Shadcn", "color_1": "black_1", "color_2": "black_2", "code_color_1" : "#000000", "code_color_2" : "#333333" },
                { "name": "FaGithub", "description": "GitHub", "color_1": "gray_1", "color_2": "black_1", "code_color_1" : "#8e8e93", "code_color_2" : "#000000" },
                { "name": "FaPython", "description": "Python", "color_1": "yellow-python_1", "color_2": "yellow-python_2", "code_color_1" : "#fde047", "code_color_2" : "#fbbf24" },
            ],
            "link": "https://github.com/gabrielmazz/nutricionistas"
        }
        
    ];

    return (


        <motion.div 
            class="font-body"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 3 }}
        >    

            <div  class="title_project text-white">
                        
                <p class="menu__link_title">Projetos</p>

            </div>


            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div class="container_projects">

                            {/* Projeto 01 */}
                            <Cards project={projects[0]} />

                            {/* Projeto 02 */}
                            <Cards project={projects[1]} />

                            {/* Projeto 03 */}
                            <Cards project={projects[2]} />

                            {/* Projeto 04 */}
                            <Cards project={projects[3]} />

                            {/* Projeto 05 */}
                            <Cards project={projects[4]} />

                            {/* Projeto 06 */}
                            <Cards project={projects[5]} />

                            {/* Projeto 07 */}
                            <Cards project={projects[14]} />

                            {/* Projeto 08 */}
                            <Cards project={projects[7]} />

                            {/* Projeto 09 */}
                            <Cards project={projects[8]} />

                        </div>

                    </CarouselItem>

                    <CarouselItem>

                    <div class="container_projects">

                        {/* Projeto 10 */}
                        <Cards project={projects[9]} />

                        {/* Projeto 11 */}
                        <Cards project={projects[10]} />

                        {/* Projeto 12 */}
                        <Cards project={projects[11]} />

                        {/* Projeto 13 */}
                        <Cards project={projects[12]} />

                        {/* Projeto 14 */}
                        <Cards project={projects[13]} />

                        {/* Projeto 15 */}
                        <Cards project={projects[6]} />

                        {/* Projeto 16 */}
                        <Cards project={projects[15]} />

                    </div>


                    </CarouselItem>

                </CarouselContent>
            </Carousel>


           
            <div class="text_card_drag text-floating">
                <p class="text-white">Arraste para o lado para ver mais projetos</p>
            </div>

        </motion.div>


        
    )
}

export default Projects