"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";

import SelectSearchOption from "@/components/SelectSearchOption";
import library1 from "@/public/images/library.jpg";
import library2 from "@/public/images/library2.jpg";
import library3 from "@/public/images/library3.jpg";
import { useState } from "react";

const Home: React.FC = () => {
  const { data }: any = useSession();
  const [value, setValue] = useState<string>("");

  return (
    <section className="">
      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full bg-cover object-cover object-top"
            src={library2} alt="hero"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Encuentra tu libro preferido aquí en nuestra biblioteca.</h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Con nuestra biblioteca te ofrecemos la posibilidad de buscar, reservar y prestar tu libro favorito aquí mismo de forma virtual.
            </p>

            <form action="#" className="max-w-xl mx-auto mt-10">
              <div>
                <label htmlFor="" className="sr-only"> Buscar </label>
                <div className="relative flex items-center gap-2 bg-white">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                  </div>

                  <input type="text" name="value" id="value"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Buscar libros por titulo, autor, ISBN, etc..."
                    className="block w-full py-3 pl-10 pr-4 text-base placeholder:text-sm font-normal leading-7 text-gray-900 placeholder-gray-500 bg- border border-white focus:ring-0 focus:border-white focus:ring-offset-0"
                  />

                  <SelectSearchOption />
                </div>
              </div>

              <div>
                <Link
                  href={`/search?id=${value}`}
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 bg-secondary border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:bg-orange-800"
                >
                  Buscar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                  <Image className="object-cover w-full h-full" src={library1} alt="" />
                </div>

                <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                  <Image className="object-cover w-full h-full" src={library2} alt="" />
                </div>

                <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                  <Image className="object-cover w-full h-full" src={library3} alt="" />
                </div>
              </div>

              <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
                Únase a otros <span className="border-b-8 border-yellow-300">5,482</span> usuarios que utilizan nuestra biblioteca
              </h2>
              <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
              </p>

              <div className="max-w-min mx-auto mt-5">
                {data?.user ? (
                  <Link href="/search/" className="flex items-center min-w-max gap-2 text-sm py-2 px-2 md:px-4 cursor-pointer border-2 border-primary rounded-md text-primary transition-all duration-200 hover:opacity-90">
                    <MagnifyingGlassIcon className="h-5 w-5 text-primary" />

                    <p className="">Buscar libros</p>
                  </Link>
                ) : (
                  <Link href="/signin" className="flex items-center min-w-max gap-2 text-sm py-2 px-2 md:px-4 cursor-pointer border-2 border-primary rounded-md text-primary transition-all duration-200 hover:opacity-90">
                    Iniciar Session
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;