import React from 'react';

import BookByCategory from './BookByCategory';

const Categories: React.FC = () => {
    return (
        <div className="bg-gray-100 py-12 transition-all duration-150 ease-in-out">
            <div className="bg-gray-100 divide-y">
                <h2 className="text-gray-600 font-bol text-2x pb-5">Libros por categorias</h2>

                <div className="space-y-6 pt-5">
                    <BookByCategory category="Tecnología" />
                    <BookByCategory category="Programación" />
                    <BookByCategory category="Historia" />
                    <BookByCategory category="Inteligencia Artificial" />
                </div>
            </div>
        </div>
    );
}

export default Categories