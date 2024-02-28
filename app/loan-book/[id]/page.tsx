"use client";

import { useParams } from 'next/navigation';
import React from 'react';

const LoanBook: React.FC = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div className='py-10 bg-white sm:py-16 min-h-screen text-primary'>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-10">
            LoanBook
            </div>
        </div>
    );
}

export default LoanBook;