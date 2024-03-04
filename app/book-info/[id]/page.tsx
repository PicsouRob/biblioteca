"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter,  } from 'next/navigation';
import { useSession } from 'next-auth/react';

import bookImage from '@/public/images/book.png';
import ListInfo from '@/components/ListInfo';
import HeaderTitle from '@/components/HeaderTitle';
import { useBookContext } from '@/hooks/useBookContext';
import { getOneBook } from '@/actions/getOneBook';

const BookView: React.FC = () => {
    const { id } = useParams();
    const { data }: any = useSession();
    const [findedBook, setFindedBook] = useState<any>({});
    const [loanBook, setLoanBook] = useState<any>({});
    const { setBookInfo } = useBookContext();
    const router = useRouter();

    const handleClick = async (link: string) => {
        await setBookInfo(findedBook);

        setTimeout(() => {
            router.push(link);
        }, 0);
    }

    useEffect(() => {
        const getStateOfLoanBook = async () => {
            try {
                const response = await fetch(`/api/find/loan-book?id=${id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", },
                });
                const result = JSON.parse(await response.json());
                
                if (response.ok) {
                    setLoanBook(result);
                } else {
                    // console.log("No encontro ningun libros");
                    setLoanBook({});
                }
            } catch (error: any) {
                console.log("Error: ", error.message);
                setLoanBook({});
            }
        }

        getStateOfLoanBook();
    }, [id]);

    useEffect(() => {
        const getfindedBook = async () => {
            const bookFinded = await getOneBook(id.toString());

            setFindedBook(bookFinded);
        }

        getfindedBook();
    }, [id]);
    
    return (
        <div className="bg-gray-100 text-primary">
            <HeaderTitle
                title='Información sobre el libro'
                text='Aquí tienes de manera detallado las informaciones sobre el libro seleccionado'
            />

            <div className="mx-6 pb-12">
                <div className="relative px-4 py-6 sm:px-6 z-50 mx-auto lg:px-8 max-w-7xl sm:max-w-4xl lg:max-w-3xl space-y-10 bg-white -mt-8 lg:-mt-16 rounded-lg">
                    <div className="space-y-10">
                        {findedBook && findedBook.volumeInfo ? (
                            <div className="flex flex-col gap-5 md:gap-8">
                                <div className="w-full h-[300px] relative">
                                    <Image
                                        alt={findedBook!.volumeInfo.title}
                                        width={400} height={0}
                                        src={findedBook.volumeInfo.imageLinks ? findedBook.volumeInfo.imageLinks.smallThumbnail : bookImage}
                                        className="w-full h-full border border-dashed object-contain object-left rounded-sm"
                                    />
                                </div>

                                <div className="space-y-2 w-full h-full">
                                    <div className="flex-1">
                                        <h1 className="font-bold text-xl md:text-2xl">{findedBook.volumeInfo.title}</h1>
                                        <p className="">{findedBook.volumeInfo.subtitle}</p>
                                        <p className="text-[14px]">{findedBook.volumeInfo.description}</p>
                                            
                                        <div className="pt-4 space-y-3">
                                            <p className=""><strong>Fecha Publicado: </strong> {findedBook.volumeInfo.publishedDate}</p>
                                                <p className="flex gap-2"><strong>Autor: </strong> <ListInfo list={findedBook.volumeInfo.authors} /></p>
                                            <p className=""><strong>Publicado Por: </strong> {findedBook.volumeInfo.publisher}</p>
                                            <p className=""><strong>Cantidad de Pagina: </strong> {findedBook.volumeInfo.pageCount}</p>
                                                <p className="flex gap-2"><strong>Categoria: </strong> <ListInfo list={findedBook.volumeInfo.categories} /></p>
                                            <p className=""><strong>Estado: </strong> Disponible</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 pt-5">
                                        {loanBook && loanBook?.state === "Prestado" && loanBook?.userId != data?.user?.id ? (
                                            <div
                                                onClick={() => handleClick(`/reservation/${findedBook.id}`)}
                                                className='py-2 px-6 border cursor-pointer text-center bg-secondary text-white rounded-md hover:shadow flex-1 transition-all duration-150 ease-in-out hover:opacity-90'
                                            >
                                                Reservar
                                            </div>
                                        ) : loanBook?.state === "Prestado" && loanBook?.userId === data?.user?.id ? (
                                            <div className="p-2 bg-green-100 text-green-600 w-full text-[14px]">Has Prestado este libro</div>
                                        ) : loanBook?.state === "Reservado" && loanBook?.userId === data?.user?.id ? (
                                            <div className="p-2 bg-green-100 text-green-600 w-full text-[14px]">Has Prestado este libro</div>
                                        ) : (
                                            <div
                                                onClick={() => handleClick(`/loan-book/${findedBook.id}`)}
                                                className='py-2 text-center cursor-pointer px-6 border text-white bg-primary rounded-md hover:shadow flex-1 transition-all duration-150 ease-in-out hover:opacity-90'
                                            >
                                                Prestar
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookView;