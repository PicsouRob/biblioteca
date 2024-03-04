"use client";

import Image from "next/image";

import backdrop from "@/public/images/library3.jpg";

interface HeaderTitleProps {
    title: string;
    text: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ text, title }) => {
    return (
        <div className="relative bg-green-200 text-white text-center py-16 sm:py-20 px-8 h-[200px] lg:h-[300px]">
                <div className="absolute inset-0">
                    <Image
                        width={1000} height={100}
                        className="w-full h-full bg-cover object-cover object-bottom"
                        src={backdrop} alt="hero"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

                <div className="absolute left-0 text-center w-full">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
                    <p className="">{text}</p>
                </div>
            </div>
    );
}

export default HeaderTitle;