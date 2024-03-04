import Categories from '@/components/Categories';
import React from 'react';

const CategoriesBook: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <Categories />
            </div>
        </div>
    );
}

export default CategoriesBook;