"use client";

import { XMarkIcon } from '@heroicons/react/24/outline';

interface ErrorProps {
    text: string
}

const Error: React.FC<ErrorProps> = ({ text }) => {
    return (
        <div
            className="flex items-center gap-3 text-cente my-3 p-4 bg-red-100 text-red-700 text-[14px] transition duration-200 rounded-sm"
        >
            <XMarkIcon
                className='h-5 w-5'
            />

            <p className="">
                {text}
            </p>
        </div>
    );
}

export default Error;