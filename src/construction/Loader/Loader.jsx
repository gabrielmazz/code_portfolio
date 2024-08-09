import React from 'react'
import './Loader.css'

const Loader = () => {
    return (

        <div class="font-body">
        
            <div class="flex place-content-center pt-12 pb-4">

                <div class="loader">
                    <svg viewBox="0 0 80 80">
                        <circle r="32" cy="40" cx="40" id="test"></circle>
                    </svg>
                    </div>

                    <div class="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                    </div>

                    <div class="loader">
                    <svg viewBox="0 0 80 80">
                        <rect height="64" width="64" y="8" x="8"></rect>
                    </svg>
                </div>

            </div>

            <div class="text-white direitos">
                <p>© [2024] [Gabriel Mazzuco]. Todos os direitos reservados</p>
            </div>
        </div>

        
    )
}

export default Loader