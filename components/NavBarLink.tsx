"use client";

import Link from "next/link";

interface NavBarLinkProps {
    text: string;
    link: string
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ text, link }) => {
    return (
        <Link
            href={link}
            className="text-sm font-medium text-gray-900 transition-all duration-200 hover:text-gray-900 focus:outline-none border-b-2 border-b-white focus:border-b-primary">
            {text}
        </Link>
    );
}

export default NavBarLink;