"use client";

import {
    ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface EmptyViewProps {
    text: string;
}

const EmptyView: React.FC<EmptyViewProps> = ({ text }) => {
    return (
        <div className="space-y-5 w-full grid place-items-center transition-all duration-150 ease-out">
            <div className="p-3 border rounded-full">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-primary" />
            </div>

            <p className="text-sm max-w-lg text-center">{text}</p>

            <Link href="/signin" className="text-sm py-2 px-2 md:px-4 cursor-pointer border-2 border-primary/60 rounded-md text-primary transition-all duration-200 hover:opacity-90">
                Buscar libros
            </Link>
        </div>
    );
}

export default EmptyView;