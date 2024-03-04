"use client";

import ContactInfo from "@/components/ContactInfo";

const Contact: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contacta con nosotras</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <ContactInfo />

                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                            <form action="#" method="POST" className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Your name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5 relative">
                                            <input type="email" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Phone number </label>
                                        <div className="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Company name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Message </label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows={4}></textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-secondary border border-transparent rounded-md focus:outline-none hover:bg-secondary/80 focus:bg-blue-700">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;