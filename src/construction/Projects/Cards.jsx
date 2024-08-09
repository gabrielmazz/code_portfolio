import React from 'react'
import './Projects.css'

import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiNumba } from "react-icons/si";
import { TbHexagonLetterC } from "react-icons/tb";
import { SiAssemblyscript } from "react-icons/si";


const Cards = ( {project} ) => {

    function getIconComponent(iconName){
        switch (iconName) {
            case 'FaPython': return <FaPython className="icons_in_card_size" color="white" />;
            case 'SiGnubash': return <SiGnubash  className="icons_in_card_size" color="white" />;
            case 'SiMicrosoftexcel': return <SiMicrosoftexcel  className="icons_in_card_size" color="white" />;
            case 'SiJupyter': return <SiJupyter  className="icons_in_card_size" color="white" />;
            case 'IoHardwareChipOutline': return <IoHardwareChipOutline  className="icons_in_card_size" color="white" />;
            case 'SiAdobephotoshop': return <SiAdobephotoshop  className="icons_in_card_size" color="white" />;
            case 'FaReact': return <FaReact  className="icons_in_card_size" color="white" />;
            case 'IoLogoJavascript': return <IoLogoJavascript  className="icons_in_card_size" color="white" />;
            case 'FaCss3Alt': return <FaCss3Alt  className="icons_in_card_size" color="white" />;
            case 'FaHtml5': return <FaHtml5  className="icons_in_card_size" color="white" />;
            case 'RiTailwindCssFill': return <RiTailwindCssFill  className="icons_in_card_size" color="white" />;
            case 'SiShadcnui': return <SiShadcnui  className="icons_in_card_size" color="white" />;
            case 'SiVite': return <SiVite  className="icons_in_card_size" color="white" />;
            case 'SiNumba': return <SiNumba  className="icons_in_card_size" color="white" />;
            case 'C': return <TbHexagonLetterC  className="icons_in_card_size" color="white" />;
            case 'SiAssemblyscript': return <SiAssemblyscript  className="icons_in_card_size" color="white" />;
            default: return null;
        }
    }

    function getColorComponent(color){
        switch (color) {
        
            case 'yellow-python_1': return '#fde047';
            case 'yellow-python_2': return '#fbbf24';
            case 'blue-ocean_1': return '#0083ca';
            case 'blue-ocean_2': return '#005696';
            case 'green-grass_1': return '#84cc16';
            case 'green-grass_2': return '#65a30d';
            case 'red_1': return '#ff453a';
            case 'red_2': return '#e73827';
            case 'orange_1': return '#ff9f0a';
            case 'orange_2': return '#d6703f';
            case 'blue_1': return '#0a84ff';
            case 'blue_2': return '#0067b8';
            case 'sky-blue_1': return '#00b4ff';
            case 'sky-blue_2': return '#0082b2';
            case 'purple_1': return '#bf5af2';
            case 'yellow_1': return '#ffcc00';
            case 'yellow_2': return '#ffab40';
            case 'sky-green_1': return '#0ed145';
            case 'black_1': return '#000000';
            case 'black_2': return '#333333';
            case'sky_purple_1': return '#7f00ff';
            case 'sky_purple_2': return '#5d008d';
            case 'clair_green_1': return '#86efac';
            case 'clair_green_2': return '#4ade80';
            case 'purple_blue_1': return '#818cf8';
            case 'purple_blue_2': return '#6366f1';
            case 'pink_1': return '#d946ef';
            case 'pink_2': return '#c026d3';
            case 'gray_1': return '#8e8e93';
            case 'gray_2': return '#57575a';
            case'sky_blue_3' : return '#4adaf0';
            case'sky_blue_4' : return '#0aabc4';
            case 'black_green_1': return '#123634';
            case 'black_green_2': return '#0b4d49';
            case 'blue_3' : return '#0a3aa8';
            case 'blue_4' : return '#041f5e';
            default: return null;

        }
    }

    return (
        
        <div className="card">

            <div className="image">
                <img src={project.img} alt="project" 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>

            <div class="content">


                <div class="title">

                    <a href="#">
                        
                        <span class="">
                            {project.title}
                        </span>

                    </a>

                </div>

                <p class="desc h-52">
                    {project.description}
                </p>
            
            {/* Renderização dinâmica dos ícones */}
            <div className="icons_in_card_tex">
                    {project.icons.map((icon, index) => (
                        
                        <section key={index} className="icons_in_card_padding">
                            <button
                                className={`group icons_in_card bg-gradient-to-r from-${icon.color_1} to-${icon.color_2} text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[${icon.code_color_1}] hover:to-[${icon.code_color_2}] p-2`}
                                style={{background: `linear-gradient(to right, ${getColorComponent(icon.color_1)}, ${getColorComponent(icon.color_2)})`}}
                                href="/"
                            >
                                {getIconComponent(icon.name)}
                                
                                <span
                                    className="description_desc absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                >
                                    {icon.description}
                                </span>
                            </button>
                        </section>
                    ))}
                </div>

                <a class="action" href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                        Descubra mais
                    <span aria-hidden="true">
                            →
                    </span>
                </a>
                
            </div>
        </div>
         
    )

}

export default Cards