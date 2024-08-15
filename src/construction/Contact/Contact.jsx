import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

import './Contact.css';

const Contact = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
        
            setShowAlert(true);
            setAlertType('warning');
            setAlertMessage('Todos os campos são obrigatórios');

            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        }

        emailjs.send("service_19x6mhj", "template_ryd8w4i", templateParams, "uF5qgIr_SzP8dufcU")
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setShowAlert(true);
            setAlertType('success');
            setAlertMessage('Email enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        }), (err) => {
            console.error("Erro ao enviar email", err)
            setShowAlert(true);
            setAlertType('error');
            setAlertMessage('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.');
        }
    }

    return (

        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 5 }}
        >
            <div className="font-body">
                <div className="title_contact text-white">
                    <p className="menu__link_title">Contate me</p>
            </div>

            <div className="flex justify-center pt-12">

                <div className="form-container">

                    <form className="form" onSubmit={sendEmail}>

                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <label className="pt-3" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Digite seu email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Como posso te ajudar?</label>
                                <textarea
                                    cols="50"
                                    rows="10"
                                    placeholder="Escreva sua mensagem aqui..."
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                            </div>

                        <button type="submit" className="form-submit-btn">
                            Submeter
                        </button>

                    </form>

                    {showAlert && (
                        <div
                        className={`alert ${alertType === 'success' ? 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105' : alertType === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105' : 'bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105'}`}
                        role="alert"
                        onClick={() => setShowAlert(false)}
                        >
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`h-5 w-5 flex-shrink-0 mr-2 text-${
                            alertType === 'success'
                                ? 'green'
                                : alertType === 'warning'
                                ? 'yellow'
                                : 'red'
                            }-600`}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                        </svg>
                        <p className="text-xs font-semibold">{alertMessage}</p>
                        </div>
                    )}
                </div>
                
            </div>
            </div>
        </motion.div>
    );
};

export default Contact;