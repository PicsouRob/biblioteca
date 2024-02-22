"use client";

import Link from "next/link";

interface NavBarLinkProps {
    text: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ text }) => {
    return (
        <Link
            href="/"
            className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            {text}
        </Link>
    );
}

export default NavBarLink;