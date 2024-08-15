import React from "react";
import "./AboutMe.css";

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

import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { SiMicrosoft } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineFeed } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { RiSlideshow2Line } from "react-icons/ri";
import { GrIntegration } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { SiJulia } from "react-icons/si";
import { GiRemedy } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";

const Cards = ({ struct }) => {

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
            case 'SiMicrosoftword': return <SiMicrosoftword  className="icons_in_card_size" color="white" />;
            case 'SiMicrosoftpowerpoint': return <SiMicrosoftpowerpoint  className="icons_in_card_size" color="white" />;
            case 'SiMicrosoft': return <SiMicrosoft  className="icons_in_card_size" color="white" />;
            case 'FaLinux': return <FaLinux  className="icons_in_card_size" color="white" />;
            case 'CgSoftwareDownload': return <CgSoftwareDownload  className="icons_in_card_size" color="white" />;
            case 'GiSmartphone': return <GiSmartphone  className="icons_in_card_size" color="white" />;
            case 'MdOutlineFeed': return <MdOutlineFeed  className="icons_in_card_size" color="white" />;
            case 'FaPerson': return <FaPerson  className="icons_in_card_size" color="white" />;
            case 'RiSlideshow2Line': return <RiSlideshow2Line  className="icons_in_card_size" color="white" />;
            case 'GrIntegration': return <GrIntegration  className="icons_in_card_size" color="white" />;
            case 'FaCode': return <FaCode  className="icons_in_card_size" color="white" />;
            case 'SiJulia': return <SiJulia  className="icons_in_card_size" color="white" />;
            case 'GiRemedy': return <GiRemedy  className="icons_in_card_size" color="white" />;
            case 'GiMedicines': return <GiMedicines  className="icons_in_card_size" color="white" />;
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
            case 'red_3' : return '#F02E2E'
            case 'red_4' : return '#B71C1C'
            default: return null;
    
        }
    }

    return (

        <div className="card_aboutme">

            <div className="info">
                <h3 className="title_about_cards font-body font-bold">{struct.title}</h3>
                <h4 className="subtitle">{struct.subtitle}</h4>
                <p className="desc_aboutme">{struct.description}</p>    

                <div className="icons_in_card_tex_aboutme">
                
                    {struct.icons.map((icon, index) => (
                        
                        <section key={index} className="icons_in_card_padding_aboutme">
                            <button
                                className={`group icons_in_card bg-gradient-to-r from-${icon.color_1} to-${icon.color_2} text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[${icon.code_color_1}] hover:to-[${icon.code_color_2}] p-2`}
                                style={{background: `linear-gradient(to right, ${getColorComponent(icon.color_1)}, ${getColorComponent(icon.color_2)})`}}
                                href="/"
                            >
                                {getIconComponent(icon.name)}
                                
                                <span
                                    className="description_desc absolute opacity-0 group-hover:opacity-100 group-hover:text-white-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 font-description_about"
                                >
                                    {icon.description}
                                </span>
                            </button>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Cards;
