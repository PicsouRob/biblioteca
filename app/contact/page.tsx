"use client";

import { useRef, useState } from "react";
import { Formik, FormikProps } from "formik";
import Link from "next/link";
import * as Yup from 'yup';

import ContactInfo from "@/components/ContactInfo";

const validation = Yup.object().shape({
    email: Yup.string().email('El correo es incorrecto!')
        .required("El correo es obligatorio."),
    message: Yup.string().required("El mensage es obligatorio."),
    phone: Yup.number().min(10, "El numero debe ser por lo menos 10 cifras").required("El telefono es obligatorio."),
    name: Yup.string().required("El nombre es obligatorio")
});

interface ContactFields {
    email: string;
    name: string;
    message: string;
    phone: string;
}

const Contact: React.FC = () => {
    const formRef = useRef<FormikProps<ContactFields> | null>(null);
    const [isSended, setIsSended] = useState<boolean>(false);

    const handleSubmitForm = async (values: any) => { 
        try {
            // setIsSended(true);
            (document.getElementById('my_modal_1') as HTMLDialogElement).showModal();
            console.log(values);
        } catch (error: any) {
            console.log(error.message);
        }
    }

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
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Mandanos un mensaje</h3>

                            <Formik
                                initialValues={{ email: '', name: '', message: '', phone: '' }}
                                validationSchema={validation}
                                onSubmit={(values) => handleSubmitForm(values)}
                                innerRef={formRef}
                            >
                                {({ values, errors, handleSubmit, handleChange, touched }) => (
                                    <form onSubmit={handleSubmit} className="mt-14">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Nombre completo </label>
                                                <div className="mt-2.5 relative">
                                                    <input onChange={handleChange} value={values.name} type="text" name="name" id="" placeholder="Entra tu nombre" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                                {touched.name && errors.name && (
                                                    <p className="text-red-700">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Correo electronico </label>
                                                <div className="mt-2.5 relative">
                                                    <input onChange={handleChange} value={values.email} type="email" name="email" id="" placeholder="Entra su correo electronico" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                                {touched.email && errors.email && (
                                                    <p className="text-red-700">{errors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Telefono </label>
                                                <div className="mt-2.5 relative">
                                                    <input onChange={handleChange} value={values.phone} type="number" name="phone" id="" placeholder="Entra tu numero de telefono" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                                {touched.phone && errors.phone && (
                                                    <p className="text-red-700">{errors.phone}</p>
                                                )}
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="" className="text-base font-medium text-gray-900"> Message </label>
                                                <div className="mt-2.5 relative">
                                                    <textarea onChange={handleChange} value={values.message} name="message" id="" placeholder="Escribe el mensage" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows={4}></textarea>
                                                </div>
                                                {touched.message && errors.message && (
                                                    <p className="text-red-700">{errors.message}</p>
                                                )}
                                            </div>

                                            <div className="sm:col-span-2">
                                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-secondary border border-transparent rounded-md focus:outline-none hover:bg-secondary/80 focus:bg-blue-700">
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

                <dialog id="my_modal_1" className="modal text-primary">
                    <div className="modal-box rounded-md bg-white">
                        <h3 className="font-bold text-lg">Envio de mensage!</h3>
                        <p className="py-4">Su mensage ha sido enviado exitosamente!, ,<br /> Nuestro equipo te responde en un tiempo muy corto</p>
                        <div className="modal-action">
                            <form method="dialog" className="flex items-center gap-5">
                                <Link href='/'
                                    className="border-2 border-primary hover:opacity-80 transition-all duration-200 ease-in px-4 py-2 rounded"
                                >
                                    Volver al inicio
                                </Link>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </section>
    );
}

export default Contact;