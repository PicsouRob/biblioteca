"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';

import Error from '@/components/Error';
import { Loan } from '@/types/model';
import InputField from '@/components/InputField';
import AuthSubmitButton from '@/components/AuthSubmitButton';
import HeaderTitle from '@/components/HeaderTitle';

const validation = Yup.object().shape({
    id: Yup.string(),
    bookId: Yup.string().required("El id del libro es obligatorio"),
    userId: Yup.string().required("El id del usuario es obligatorio."),
    comment: Yup.string(),
    dateReturned: Yup.string().required("La fecha de devolución es obligatorio."),
});

const LoanBook: React.FC = () => {
    const { data }: any = useSession();
    const router: AppRouterInstance = useRouter();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<FormikProps<Loan> | null>(null);
    const { id } = useParams();

    const keyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === "Enter" && formRef?.current) {
            formRef.current.handleSubmit();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keypress', keyPress);
        return () => document.removeEventListener('keypress', keyPress);
    }, [keyPress]);

    const handleSubmitForm = async (values: Loan) => {
        try {
            setError("");
            setIsLoading(true);
            const response = await fetch("/api/loan", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(values)
            });
            
            const user = JSON.parse(await response.json());
            
            if(response.ok) {
                toast.success("Libro prestado exitosamente!");
            
                router.refresh();
                router.push(`/profile/${data?.user?.id}`);
            } else {
                setError(`${user?.message}`);
            }
            
            setIsLoading(false);
        } catch(error: any) {
            setIsLoading(false);
            setError(`${error}`);
        }
    };

    return (
        <div className='relative bg-gray-100 text-primary pb-12'>
            <HeaderTitle
                title='Prestamo de libro'
                text='Llena el formulario para el prestamo del libro'
            />
            
            <div className="mx-6 md:mx-8">
                <div className="relative px-4 py-6 sm:px-6 z-50 mx-auto lg:px-8 max-w-7xl sm:max-w-4xl lg:max-w-3xl space-y-10 bg-white -mt-8 lg:-mt-12 rounded-lg">
                    <Formik
                        initialValues={{
                            id: 'kjkjj', userId: data?.user?.id! || id.toString(), bookId: id.toString(), comment: '', dateReturned: '',
                        }}
                        validationSchema={validation}
                        onSubmit={(values) => handleSubmitForm(values)}
                        innerRef={formRef}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form onSubmit={handleSubmit} className="mt-3">
                                {error && <Error text={error} />}

                                <InputField label='Id del libro *'
                                    name='bookId' placeholder='Entra el id del libro'
                                    value={values.bookId} handleChange={handleChange}
                                >
                                    {touched.bookId && errors.bookId && (
                                        <p className="text-red-500 text-sm pt-1">{errors.bookId}</p>
                                    )}
                                </InputField>

                                <InputField label='Fecha de devolución *'
                                    type='date' name='dateReturned'
                                    placeholder='Fecha de devolución'
                                    value={values.dateReturned} handleChange={handleChange}
                                >
                                    {touched.dateReturned && errors.dateReturned && (
                                        <p className="text-red-500 text-sm pt-1">{errors.dateReturned}</p>
                                    )}
                                </InputField>

                                <InputField label='Comentario'
                                    name='comment' placeholder='Escribe su comentario aqui'
                                    value={values.comment} handleChange={handleChange}
                                />

                                <div className="mt-4">
                                    <AuthSubmitButton isLoading={isLoading} text='Prestar libro' />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default LoanBook;