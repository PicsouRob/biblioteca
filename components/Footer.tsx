"use client";

import React from "react";
import Link from "next/link";

import { useShowContent } from "@/hooks/useShowContent";
import Logo from "./Logo";

const Footer: React.FC = () => {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const show: boolean = useShowContent();

    return (
        <section className="">
            {show && (
                <div className="py-10 bg-primary sm:pt-16 lg:pt-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                            <div>
                                <p className="text-base text-gray-500">Nosotros</p>

                                <div className="mt-8 space-y-4 flex flex-col">
                                    <Link href='/about' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Acerca de
                                    </Link>
                                    <Link href='/how-it-works' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Cómo funciona
                                    </Link>
                                    <Link href='/faq' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        FAQ
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <p className="text-base text-gray-500">Ayuda</p>

                                <div className="mt-8 space-y-4 flex flex-col">
                                    <Link href='/' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Atención al cliente
                                    </Link>
                                    <Link href='/' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Términos y condiciones
                                    </Link>
                                    <Link href='/' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Política de privacidad
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <p className="text-base text-gray-500">Recursos</p>

                                <div className="mt-8 space-y-4 flex flex-col">
                                    <Link href='/categories' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Categoria
                                    </Link>
                                    <Link href='/search' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Buscar
                                    </Link>
                                    <Link href='/contact' className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <p className="text-base text-gray-500">Contacto</p>

                                <ul className="mt-8 space-y-4">
                                    <li>
                                        <p className="">biblioteca@gmail.do</p>
                                    </li>
                                    <li>
                                        <p className="">Tel: +1 829-0000-0000</p>
                                    </li>
                                    <li>
                                        <p className="">Av. Máximo Gómez #72, Santo Domingo, República Dominicana.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="mt-16 mb-10 border-gray-800" />

                        <div className="flex flex-wrap items-center justify-between">
                            <Logo white />

                            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto">© Copyright {year}, Todos los derechos reservados </p>

                            <Link href="/" className="hover:underline">Términos y condiciones</Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Footer;