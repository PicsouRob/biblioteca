import React from 'react';

const SignFooter: React.FC = () => {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    
    return (
        <div className="w-full text-xs flex flex-col flex-wrap gap-y-2 justify-between items-center pt-8 text-center text-wrap">
            <span
                className="flex-1 text-gray-500"
            >
                © {year} Biblioteca. Todos los derechos reservados
            </span>
            
            <div
                className="space-x-1 space-y-2 md:space-y-0 mx-auto"
            >
                <p
                    className="text-gray-500 hover:text-teal-600"
                >
                    Av. Máximo Gómez #72, Santo Domingo, República Dominicana.
                </p>
    
                <p
                    className="text-gray-500 hover:text-teal-600"
                >
                    Tel.: (809) 686-0021 . Fax: (809) 287-8702
                </p>
            </div>
        </div>
    );
}

export default SignFooter;