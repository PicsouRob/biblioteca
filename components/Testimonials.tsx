import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="relative bg-gray-100">
            <div className="flex items-center justify-between h-full w-full absolute z-0">
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-gray-100 h-full" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto max-w-7xl relative z-40">
                <CarouselProvider naturalSlideHeight={100} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                        Lo que nuestros clientes
                        <br />
                        Han dicho
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>
                    <Slider>
                        <Slide index={0} tabIndex={0}>
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <Image width={400} height={400} src="https://i.ibb.co/4g1D9cv/Image width={0} height={0}slider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>

                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">¡Algunos de los mejores trabajos que se hicieron!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                                                Nuestros valores fundamentales están en el centro de todo lo que hacemos. Están integrados en nuestra vida laboral diaria y nos ayudan a recordar que nuestros clientes siempre son lo primero, el último agradecimiento siempre proviene de nosotros.                                            </p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">Maria Sanchez</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Estudiante de Ingenieria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        <Slide index={1} tabIndex={1}>
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <Image width={400} height={400} src="https://i.ibb.co/4g1D9cv/Image width={0} height={0}slider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <Image width={400} className="h-full" height={400} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">¡Algunos de los mejores trabajos que se hicieron!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                                                Nuestros valores fundamentales están en el centro de todo lo que hacemos. Están integrados en nuestra vida laboral diaria y nos ayudan a recordar que nuestros clientes siempre son lo primero, el último agradecimiento siempre proviene de nosotros.                                            </p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">Maria Sanchez</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Estudiante en Derecho</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                            
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                            <Image width={0} height={0} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                            <Image width={0} height={0} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}