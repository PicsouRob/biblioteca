"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import EmptyView from "./EmptyView";
import { ReservationProps } from "@/types/model";

import bookImage from '@/public/images/book.png';
import { userReservedBook } from "@/actions/userReservedBook";

const UserReservedBook: React.FC<{ id: string }> = ({ id }) => {
    const [book, setBook] = useState<ReservationProps[]>([]);
    
    useEffect(() => {
        const getBook = async () => {
            const findedBook = await userReservedBook(id);
            setBook(findedBook);
        }
        
        getBook();
    }, [id]);

    return (
        <div className="">
            {book.length < 1 ? (
                <EmptyView text="Aún no tienes ningún libro reservado. Empiece por buscar un libro y haga una reserva." />
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
                                <p className="">Fecha de reservación: {`${data.dateCreated}`}</p>
                                <p className="">Fecha de recuperación: {data.recuperationDate}</p>
                                <p className="">Estado: {data.state}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserReservedBook;