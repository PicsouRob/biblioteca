"use client";

import Image from "next/image";

import heroImage from "@/public/images/library2.jpg";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SelectSearchOption from "@/components/SelectSearchOption";

const Home: React.FC = () => {
  return (
    <section>
      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full bg-cover object-cover object-top"
            src={heroImage} alt="hero"
          />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        />

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

                  <input type="text" name="" id=""
                    placeholder="Buscar libros por titulo, autor, ISBN, etc..."
                    className="block w-full py-3 pl-10 pr-4 text-base placeholder:text-sm font-normal leading-7 text-gray-900 placeholder-gray-500 bg- border border-white focus:ring-0 focus:border-white focus:ring-offset-0"
                  />

                  <SelectSearchOption />
                </div>
              </div>

              <div>
                <Link
                  href="/search"
                  className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-orange-900
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-orange-800
                            "
                >
                  Buscar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">

      </div>
    </section>
  );
}

export default Home;