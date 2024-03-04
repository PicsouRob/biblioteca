"use client";

import { userLoanBook } from "@/actions/userLoanBook";
import { Loan } from "@/types/model";
import { useEffect, useState } from "react";
import EmptyView from "./EmptyView";
import Image from "next/image";

import bookImage from '@/public/images/book.png';

const UserLoanBook: React.FC<{ id: string }> = ({ id }) => {
    const [book, setBook] = useState<Loan[]>([]);
    
    useEffect(() => {
        const getBook = async () => {
            const findedBook = await userLoanBook(id);
            setBook(findedBook);
        }
        
        getBook();
    }, [id]);

    return (
        <div className="">
            {book.length < 1 ? (
                <EmptyView text="Aún no tienes ningún libro prestado. Empiece por buscar un libro y haga un prestamo." />
            ) : (
                <div className="flex items-center gap-6 flex-wrap">
                    {book.map((data, index) => (
                        <div key={index} className="bg-white p-4 rounded-md space-y-4">
                            <div className="relative space-y-5">
                                <Image alt={data.userId}
                                    width={200} height={50}
                                    src={data.image || bookImage}
                                    className="w-full h-32 object-cover object-top rounded-sm flex-"
                                />
                            </div>

                            <h2 className="font-medium">{data.title}</h2>

                            <div className="text-xs space-y-2">
                                <p className="">Fecha del prestamo: {`${data.dateCreated}`}</p>
                                <p className="">Fecha de devolución: {data.dateReturned}</p>
                                <p className="">Estado: {data.state}</p>
                                <p className="">Entregado: {data.returned ? "Si" : "No"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserLoanBook;