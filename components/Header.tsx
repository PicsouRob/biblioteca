'use client';

import Link from "next/link";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

import { useShowContent } from "@/hooks/useShowContent";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import { UserIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
    const show: boolean = useShowContent();
    const { data }: any = useSession();

    return (
        <div className="">
            {show && (
                <header className="relative bg-white border-b">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="flex items-center justify-between h-16 lg:h-[72px]">
                            <div className="flex items-center flex-shrink-0 ">
                                <Logo />
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
                                <NavBarLink link="/" text="Inicio" />
                                <NavBarLink link="/categories" text="Categorias" />
                                <NavBarLink link="/search" text="Buscar libros" />
                                <NavBarLink link="/about" text="Acerca de" />
                                <NavBarLink link="/contact" text="Contacto" />
                            </div>

                            <div className="flex items-center gap-4">
                                {data?.user ? (
                                    <Link href={`/profile/${data.user?.id!}`} className="flex items-center gap-2 text-sm py-2 px-2 md:px-4 cursor-pointer border-2 border-primary rounded-md text-primary transition-all duration-200 hover:opacity-90">
                                        <UserIcon className="h-5 w-5 text-primary" />

                                        <p className="">Mi cuenta</p>
                                    </Link>
                                ) : (
                                    <Link href="/signin" className="text-sm py-2 px-2 md:px-4 cursor-pointer border-2 border-primary rounded-md text-primary transition-all duration-200 hover:opacity-90">
                                    Iniciar Session
                                </Link>
                                )}

                                <div className="">
                                    <div className="drawer flex lg:hidden">
                                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                        <div className="drawer-content">
                                            <label htmlFor="my-drawer" className="drawer-button m-2">
                                                <Bars3Icon className="w-6 h-6 text-primary" />
                                            </label>
                                        </div>
                                        <div className="drawer-side z-50">
                                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                            <div className="menu w-80 min-h-full bg-white text-gray-700 text-lg font-bold divide-y">
                                                <div className="py-5 px-4">
                                                    <Logo />
                                                </div>

                                                <Link href="/" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100">
                                                    <p className="">Inicio</p>
                                                    <ChevronRightIcon className="h-4 w-4" />
                                                </Link>
                                                <Link href="/categories" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100">
                                                    <p className="">CAtegorias</p>
                                                    <ChevronRightIcon className="h-4 w-4" />
                                                </Link>
                                                <Link href="/search" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100">
                                                    <p className="">Buscar libro</p>
                                                    <ChevronRightIcon className="h-4 w-4" />
                                                </Link>
                                                <Link href="/about" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100">
                                                    <p className="">Acerca de</p>
                                                    <ChevronRightIcon className="h-4 w-4" />
                                                </Link>
                                                <Link href="/contact" aria-label="close sidebar" id="my-drawer" className="flex items-center drawer-overlay justify-between px-4 py-3 hover:bg-gray-100">
                                                    <p className="">Contacto</p>
                                                    <ChevronRightIcon className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
}

export default Header;