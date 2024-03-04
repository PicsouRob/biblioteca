'use client';

import { findListOfBook } from "@/actions/findListOfBook";
import { useEffect, useState } from "react";
import Book from "./Book";

interface BookByCategoryProps {
    category: string;
}

const BookByCategory: React.FC<BookByCategoryProps> = ({ category }) => {
    const generatedArray = Array.from({ length: 6 }, (_, ind) => ind + 1);
    const [findedBook, setFindedBook] = useState<any[]>([]);

    useEffect(() => {
        const getListOfBook = async () => {
            const listBook = await findListOfBook(`https://www.googleapis.com/books/v1/volumes?q=${category}`);

            setFindedBook(listBook);
        }

        getListOfBook();
    }, [category]);

    return (
        <div className="">
            <div className="mb-3">
                <h1 className="font-bold text-gray-700 text-2xl md:text-[23px]">
                    {category}
                </h1>
            </div>

            <div className="">
                {!findedBook ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                        {generatedArray.map((_, ind) => (
                            <div key={ind} className="skeleton w-full h-full"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                        {findedBook.slice(0, 6).map((data, index) => (
                            <Book key={index} bookInfo={data} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookByCategory;