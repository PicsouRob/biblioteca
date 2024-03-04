"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Formik, FormikProps } from "formik";
import * as Yup from 'yup';

import Book from "@/components/Book";
import Categories from "@/components/Categories";
import { findListOfBook } from "@/actions/findListOfBook";

const validation = Yup.object().shape({
    value: Yup.string().required("El valor es obligotorio."),
});

const Search: React.FC = () => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const input = searchParams.get("input");
    console.log(input);
    const formRef = useRef<FormikProps<{ value: string; }> | null>(null);
    const [books, setBooks] = useState<any[]>([]);

    const keyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === "Enter" && formRef?.current) {
            formRef.current.handleSubmit();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keypress', keyPress);
        return () => document.removeEventListener('keypress', keyPress);
    }, [keyPress]);

    useEffect(() => {
        if (input != null) {
            handleSearch(input!);
        }
    }, [input]);

    const handleSearch = async (value: string ) => {
        const url: string =  `https://www.googleapis.com/books/v1/volumes?q=${value}&langRestrict=es&maxResults=40&key=AIzaSyCmIncsVIIYl5XcqTfg7k1uEKPA1eMTAIs`;
        const listBook = await findListOfBook(url);
        
        setBooks(listBook);
    }

    return (
        <Suspense>
            <div className="py-10 bg-gray-100 sm:py-16 min-h-screen text-primary">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-10 divide-y-2 divide-dashed">
                    <div className="max-w-2xl mx-auto text-center space-y-3">
                        <h1 className="text-3xl font-bold text-gray-600 sm:text-2xl xl:text-3xl ">Busca tu libro preferido aquí.</h1>
                        <p className="max-w-lg mx-auto text-xs font-normal leading-7 text-gray-500">
                            Con nuestra biblioteca te ofrecemos la posibilidad de buscar, reservar y prestar tu libro favorito aquí mismo de forma virtual.
                        </p>

                        <Formik
                            initialValues={{ value: input || "", }}
                            validationSchema={validation}
                            onSubmit={(values) => handleSearch(values.value)}
                            innerRef={formRef}
                        >
                            {({ values, errors, handleSubmit, handleChange, touched }) => (
                                <form onSubmit={handleSubmit} className="max-w-xl mx-auto gap-3 flex items-center flex-wrap">
                                    <div className="flex-1">
                                        <label htmlFor="" className="sr-only"> Buscar </label>
                                        <div className="relative flex items-center gap-2 bg-white border rounded-md border-primary">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                                            </div>

                                            <input type="text" name="value" id="value"
                                                value={values.value}
                                                onChange={handleChange}
                                                placeholder="Buscar libros por titulo, autor, ISBN, etc..."
                                                className="block w-full py-2 pl-10 pr-4 text-base placeholder:text-sm font-normal leading-7 text-gray-900 placeholder-gray-500 bg- border border-white focus:ring-0 focus:border-white focus:ring-offset-0"
                                            />
                                        </div>

                                        {touched.value && errors.value && (
                                            <p className="text-red-600 text-xs">{errors.value}</p>
                                        )}
                                    </div>

                                    <div>
                                        <button
                                            className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold tracking-widest text-white transition-all duration-200 bg-primary rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:bg-orange-800"
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                    {books.length < 1 ? (
                        <Categories />
                    ) : (
                        <div className="pt-5 space-y-5 transition-all duration-150 ease-in-out">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="">Libros Encontrados</h3>
                                <p className="">Total encontrados: {books.length}</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                {books.map((data, index) => (
                                    <Book key={index} bookInfo={data} />
                                ))}
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </Suspense>
    )
}

export default Search;