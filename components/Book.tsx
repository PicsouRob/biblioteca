"use client";

import Image from "next/image";
import Link from "next/link";

import bookImage from '@/public/images/book.png';

interface BookProps {
    bookInfo: any;
}

const Book: React.FC<BookProps> = ({ bookInfo }) => {
    return (
        <div className="relative bg-white p-3 text-center flex items-center justify-center rounded hover:bg-green-0 hover:shadow transition-all duration-150 ease-in-out">
            <Link href={`/book-info/${bookInfo.id}`} className="space-y-3">
                <div className="">
                    <Image alt={bookInfo.volumeInfo.title}
                        height={200} width={200}
                        src={bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.thumbnail : bookImage}
                        className="w-full h-28 object-cover object-top rounded-sm flex-"
                    />
                </div>
    
                <h2 className="font-medium text-xs text-gray-600">{bookInfo.volumeInfo.title}</h2>
                <p className="text-xs text-gray-600">{bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors[0] : "Autor desconocido"}</p>
            </Link>
        </div>
    );
}

export default Book;