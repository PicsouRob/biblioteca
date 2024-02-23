"use client";
                   
import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

import googleLogo from "/public/icons/google.svg";

const ConnectWithGoogle: React.FC = () => {
    const googleSignIn = async () => {
        await signIn('google');
    }
                                                    
    return (
        <div
            className="mt-8 space-y-3"
        >
            <button
                onClick={() => googleSignIn()}
                type="button"
                className="relative flex items-center justify-center gap-3 w-full p-3 text-[15px] font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black focus:outline-none"
            >
                <div className="">
                    <Image 
                        src={googleLogo}
                        alt='googleLogo'
                        height="6"
                        width="6"
                        className='h-6 w-6'
                    />
                </div>
                <p className="">
                    Conectar con Google
                </p>
            </button>
            
            <div className="flex items-center gap-3">
                <hr className="flex-1" />
                <p className="font-medium text-gray-700 text-sm">O</p>
                <hr className="flex-1" />
            </div>
        </div>
    );
}

export default ConnectWithGoogle;