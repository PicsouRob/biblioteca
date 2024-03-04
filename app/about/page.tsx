import Image from 'next/image';
import React from 'react';

import library1 from "@/public/images/library.jpg";
import library2 from "@/public/images/library2.jpg";
import library3 from "@/public/images/library3.jpg";
import library4 from "@/public/images/signleft.jpg";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-primary">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          
        <div className="2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9">
          <div className="lg:w-10/12 w-full">
            <p className="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer">Acerca de nosotros</p>
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
              Estamos aquí para ofrecerle un conjunto de libros accesibles para todos.            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Nuestra plataforma permite a los usuarios buscar fácilmente entre nuestro extenso catálogo de libros utilizando diversos criterios como título, autor, género, etc. Además, ofrecemos la posibilidad de reservar libros para su posterior préstamo, asegurando que los usuarios puedan acceder a los libros que desean de manera conveniente y oportuna.

              <br /> <br />

              Facilitamos el proceso de préstamo de libros de forma virtual, permitiendo a los usuarios acceder a sus libros favoritos desde la comodidad de sus hogares o cualquier otro lugar con conexión a internet. Nuestra plataforma garantiza una experiencia sin complicaciones, con opciones flexibles de préstamo y devolución.
            </p>
          </div>
    
          <div className="lg:mt-14 sm:mt-10 mt-12">
            <Image width={0} height={0} className="lg:block hidden w-full" src={library3} alt="Group of people Chilling" />
            <Image width={0} height={0} className="lg:hidden sm:block hidden w-full" src={library2} alt="Group of people Chilling" />
            <Image width={0} height={0} className="sm:hidden block w-full" src={library3} alt="Group of people Chilling" />
          </div>
    
          <div className="lg:mt-16 sm:mt-12 mt-16 grid md:grid-cols-2 lg:gap-8 gap-12">
            <div className="w-full max-h-min">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Nuestra Historia</h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-4">
                En un mundo cada vez más digitalizado, donde la información está al alcance de un clic, nos dimos cuenta de la necesidad de adaptar el acceso a la lectura a las nuevas tecnologías. Decidimos crear nuestro sistema de gestión de biblioteca online para eliminar barreras físicas y temporales que limitan el acceso a la lectura. Creemos firmemente en que todos deberían tener la oportunidad de disfrutar de los beneficios de la lectura, independientemente de su ubicación geográfica o sus horarios.              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                Nuestra visión es la de convertirnos en el principal destino virtual para los amantes de la lectura en todo el mundo. Queremos fomentar una comunidad global de lectores ávidos, conectando a personas de todas las edades y procedencias a través de la magia de los libros. Visualizamos un futuro donde nuestra plataforma no solo sea un recurso para acceder a libros, sino también un espacio de intercambio cultural y aprendizaje continuo. Esperamos ser un catalizador para inspirar el amor por la lectura y promover la alfabetización en todas sus formas.              </p>
            </div>

            <div className="lg:flex items-center relative w-full">
              <Image width={0} height={0} className="lg:block hidden bg-cover h-full object-cover w-full" src={library2} alt="people discussing on board" />
              
              <Image width={0} height={0} className="lg:hidden sm:block hidden w-full" src={library4} alt="people discussing on board" />
              <Image width={0} height={0} className="sm:hidden block w-full" src={library3} alt="people discussing on board" />
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default About;