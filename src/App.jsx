import './App.css'

import './Header.css'

// Importação das partes da página que estão em outros arquivos (componentes separados)
import Home from './construction/Home/Home.jsx';
import About from './construction/About/About.jsx';
import Projects from './construction/Projects/Projects.jsx';
import Published from './construction/Published/Published.jsx';
import Contact from './construction/Contact/Contact.jsx';
import Loader from './construction/Loader/Loader.jsx';
import './App.css';

import { Link, Element, animateScroll as scroll } from 'react-scroll';

function App() {
    return (
        <div>
            <div className="organizacao_inteira_menu_logo
                            text-white font-body">
                <div className="organizacao_logo">
                    <img src="https://i.imgur.com/c79mrwP.png" alt="Logo" className="w-48 h-48"/>
                </div>
                <div className="organizacao_menu cursor-pointer">
                    <li className="menu__link">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="menu__link">
                        <Link to="about" smooth={true} duration={500}>Sobre mim</Link>
                    </li>
                    <li className="menu__link">
                        <Link to="projects" smooth={true} duration={500}>Projetos</Link>
                    </li>
                    <li className="menu__link">
                        <Link to="published" smooth={true} duration={500}>Trabalhos</Link>
                    </li>
                    <li className="menu__link">
                        <Link to="contact" smooth={true} duration={500}>
                            <button>Contato</button>
                        </Link>
                    </li>
                </div>
            </div>
            <Element name="home">
                <Home />
            </Element> 
            <Element name="about">
                <About />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="published">
                <Published />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <Loader />
        </div>
    );
}

export default App

