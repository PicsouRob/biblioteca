"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface LogoProps {
    white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white }) => {
    return (
        <>
            <Link href="/">
                <div className="flex items-center gap-x-1 font-sans">
                    <BookOpenIcon className={`${white && 'text-white'} h-12 w-12 text-primary`} />
                    
                    <span className={`${white && 'text-white'} text-primary text-xl font-bold md:text-2xl xl:text-3xl`}>
                        Biblioteca
                    </span>
                </div>
            </Link>
        </>
    );
}

export default Logo;