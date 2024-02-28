"use client";

import Image from 'next/image';
import { useParams,  } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import bookImage from '@/public/images/book.png';
import ListInfo from '@/components/ListInfo';

const BookView: React.FC = () => {
    const { id } = useParams();
    const [bookInfo, setBookInfo] = useState<any>({});

    console.log(bookInfo);

    useEffect(() => {
        const getBookInfo = async () => {
            try {
                const url: string = `https://www.googleapis.com/books/v1/volumes/${id}`;
                const response = await fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", },
                });
                const result = await response.json();
                
                if (response.ok) {
                    setBookInfo(result);
                } else {
                    console.log("No encontro ningun libros");
                    setBookInfo({});
                }
            } catch (error: any) {
                console.log("Error: ", error.message);
                setBookInfo({});
            }
        }

        getBookInfo();
    }, [id]);
    
    return (
        <div className="py-10 bg-white sm:py-16 text-primary">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-10 divide-y-2 divide-dashed">
                {bookInfo && bookInfo.volumeInfo ? (
                    <div className="flex items-cente gap-5 md:gap-8">
                        <div className="flex- w-full md:w-1/2 relative">
                            <Image alt={bookInfo!.volumeInfo.title}
                                layout='fill'
                                objectFit='contain'
                                src={bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.smallThumbnail : bookImage}
                                className="w-full h-full border border-dashed object-cover object-top rounded-sm flex-"
                            />
                        </div>

                        <div className="space-y-2 w-full md:w-1/2">
                            <h1 className="font-bold text-xl md:text-2xl">{bookInfo.volumeInfo.title}</h1>
                            <p className="">{bookInfo.volumeInfo.subtitle}</p>
                            <p className="text-[14px]">{bookInfo.volumeInfo.description}</p>
                                
                            <div className="pt-4 space-y-3">
                                <p className=""><strong>Fecha Publicado: </strong> {bookInfo.volumeInfo.publishedDate}</p>
                                <p className="flex gap-2"><strong>Autor: </strong> <ListInfo list={bookInfo.volumeInfo.authors} /></p>
                                <p className=""><strong>ISBN: </strong> {bookInfo.volumeInfo.authors[0]}</p>
                                <p className=""><strong>Publicado Por: </strong> {bookInfo.volumeInfo.publisher}</p>
                                <p className=""><strong>Cantidad de Pagina: </strong> {bookInfo.volumeInfo.pageCount}</p>
                                <p className="flex gap-2"><strong>Categoria: </strong> <ListInfo list={bookInfo.volumeInfo.categories} /></p>
                                <p className=""><strong>Estado: </strong> Disponible</p>
                            </div>

                            <div className="flex items-center justify-between gap-4 pt-5">
                                <Link href={`/loan-book/${bookInfo.id}`} className='py-2 text-center px-6 border text-white bg-primary rounded-md hover:shadow flex-1 transition-all duration-150 ease-in-out hover:opacity-90'>Prestar</Link>
                                <Link href={`/reservation/${bookInfo.id}`} className='py-2 px-6 border text-center bg-secondary text-white rounded-md hover:shadow flex-1 transition-all duration-150 ease-in-out hover:opacity-90'>Reservar</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 w-52">
                        <div className="flex gap-4 items-center">
                            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                            <div className="flex flex-col gap-4">
                                <div className="skeleton h-4 w-20"></div>
                                <div className="skeleton h-4 w-28"></div>
                            </div>
                        </div>
                        <div className="skeleton h-32 w-full"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookView;