"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';

import Error from '@/components/Error';
import InputField from '@/components/InputField';
import AuthSubmitButton from '@/components/AuthSubmitButton';
import { ReservationProps } from '@/types/model';
import HeaderTitle from '@/components/HeaderTitle';
import { getOneBook } from '@/actions/getOneBook';
import { sendMail } from '@/libs/sendMail';
import { convertDate, getDateInfo } from '@/utils/convertDate';

const validation = Yup.object().shape({
    id: Yup.string(),
    title: Yup.string(),
    image: Yup.string(),
    bookId: Yup.string().required("El id del libro es obligatorio"),
    userId: Yup.string().required("El id del usuario es obligatorio."),
    comment: Yup.string(),
    recuperationDate: Yup.string().required("La fecha de recuperación es obligatorio."),
});

const Reservation: React.FC = () => {
    const { data: session, status }: any = useSession();
    const router: AppRouterInstance = useRouter();
    const [title, setTitle] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<FormikProps<ReservationProps> | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (!session?.user) {
            
            router.push("/signin");
        }
    }, [session, router]);

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
        const getFindedBook = async () => {
            const bookFinded = await getOneBook(id.toString());
            
            setTitle(bookFinded.volumeInfo.title);
            setImage(bookFinded.volumeInfo.imageLinks?.smallThumbnail);
        }

        getFindedBook();
    }, [id]);

    const handleSubmitForm = async (values: ReservationProps) => {
        try {
            setError("");
            setIsLoading(true);
            values.title = title;
            values.image = image;
            const { day, month, year } = getDateInfo(values.recuperationDate);
            const convertion = convertDate(values.recuperationDate);
            values.recuperationDate = convertion;
            const now = Date.now();
            const date = new Date(now);

            if ((day - 3 >= date.getUTCDate()) && (month >= date.getMonth()) && (year >= date.getFullYear())) {
                const response = await fetch("/api/reservation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify(values)
                });
            
                const user = JSON.parse(await response.json());
            
                if (response.ok) {
                    toast.success("Libro reservado exitosamente!");

                    await sendMail({
                        name: session?.user?.name,
                        email: session?.user?.email,
                        message: `Su solicitud de reservación a nuestro portal web de la biblioteca ha sido aprobada exitosamente. Has reservado el libre titulado: ${values.title}. Pasa a recuperarlo en esta fecha: ${values.recuperationDate}.`,
                        subject: "Reservación de libro",
                    });
            
                    router.refresh();
                    router.push(`/profile/${session?.user?.id}`);
                } else {
                    setError(`${user?.message}`);
                }
            } else {
                setError("Debes seleccionar una fecha superior a lo de hoy y que sea minimo 3 dias despues");
            }
            
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            setError(`${error}`);
        }
    };

    return (
        <div className='relative bg-gray-100 min-h-max pb-12 text-primary'>
            <HeaderTitle
                title='Reservación de libro'
                text='Llena el formulario para reservación del libro'
            />

            <div className="mx-6 md:mx8">
                <div className="relative px-4 py-6 sm:px-6 z-50 mx-auto lg:px-8 max-w-7xl sm:max-w-4xl lg:max-w-3xl space-y-10 bg-white -mt-8 lg:-mt-12 rounded-lg">
                    <Formik
                        initialValues={{
                            id: '', title: '', image: '', userId: session?.user?.id!, bookId: id.toString(), comment: '', recuperationDate: '',
                        }}
                        validationSchema={validation}
                        onSubmit={(values) => handleSubmitForm(values)}
                        innerRef={formRef}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form onSubmit={handleSubmit} className="">
                                {error && <Error text={error} />}

                                <InputField label='Id del libro *'
                                    name='bookId' placeholder='Entra el id del libro'
                                    value={values.bookId} handleChange={handleChange}
                                >
                                    {touched.bookId && errors.bookId && (
                                        <p className="text-red-500 text-sm pt-1">{errors.bookId}</p>
                                    )}
                                </InputField>

                                <InputField label='Fecha de recuperación *'
                                    type='date' name='recuperationDate'
                                    placeholder='Fecha de recuperación'
                                    value={values.recuperationDate} handleChange={handleChange}
                                >
                                    {touched.recuperationDate && errors.recuperationDate && (
                                        <p className="text-red-500 text-sm pt-1">{errors.recuperationDate}</p>
                                    )}
                                </InputField>

                                <InputField label='Comentario'
                                    name='comment' placeholder='Escribe su comentario aqui'
                                    value={values.comment} handleChange={handleChange}
                                />

                                <div className="mt-4">
                                    <AuthSubmitButton isLoading={isLoading} text='Reservavar libro' />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Reservation;