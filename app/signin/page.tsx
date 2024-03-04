"use client";

import Image from "next/image";
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from "react-hot-toast";
import { useCallback, useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";

import leftImages from '@/public/images/signleft.jpg';
import AuthSubmitButton from "@/components/AuthSubmitButton";
import SignFooter from "@/components/SignFooter";
import Link from "next/link";
import SignLeftInfo from "@/components/SignLeftInfo";
import Logo from "@/components/Logo";
import Error from "@/components/Error";
import ConnectWithGoogle from "@/components/ConnectWithGoogle";
import { useRouter } from "next/navigation";

const validation = Yup.object().shape({
    email: Yup.string().email('El correo es incorrecto!')
        .required("El correo es obligatorio."),
    password: Yup.string().min(6, 'La contraseña debe ser al menos 6 caracteres.')
        .required("La contraseña es obligatorio")
});

const SignIn: React.FC = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<FormikProps<{ email: string; password: string; }> | null>(null);
    
    const keyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === "Enter" && formRef?.current) {
            formRef.current.handleSubmit();
        }
    }, []);
    
    useEffect(() => {
        if (session?.user) {
            router.push("/");
        }
    }, [session?.user, router]);

    useEffect(() => {
        document.addEventListener('keypress', keyPress);
        return () => document.removeEventListener('keypress', keyPress);
    }, [keyPress]);
    
    const handleSubmitForm = async (values: any) => {
        try {
            setError("");
            setIsLoading(true);
            const login = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: true,
            });

            if(login?.ok) {
                toast.success("Has conectado exitosamente.", { duration: 2 });

                router.push('/');
                router.refresh();
            } else {
                setError(`${login?.error}`);
            }
            
            setIsLoading(false);
        } catch(error) {
            setIsLoading(false);
            setError("Se occurió algo, intenta de nuevo!");
        }
    }

    return (
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <Toaster />
            <div className="hidden relative lg:flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8 h-full">
                <div className="absolute inset-0 bg-red-500">
                    <Image width="500" height="500"
                        className="object-cover object-center bg-cover w-full h-full"
                        src={leftImages}
                        alt="sign"
                    />
                </div>

                <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                />

                <div className="relative">
                    <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                        <h3 className="text-4xl font-bold text-white">Únase a la comunidad de nuestra biblioteca</h3>
                        <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                            <SignLeftInfo text="Ver catalogos" />
                            <SignLeftInfo text="Buscar libros" />
                            <SignLeftInfo text="Reservar libros" />
                            <SignLeftInfo text="Prestar libros" />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10 bg-white px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto w-full">
                    
                    <div className="py-4">
                        <Logo />
                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">Bienvenido</h2>
                    <p className="mt-2 text-base text-gray-600">No tienes cuenta? <Link href="/register" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Crear una cuenta</Link></p>

                    <ConnectWithGoogle />

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validation}
                        onSubmit={(values) => handleSubmitForm(values)}
                        innerRef={formRef}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form onSubmit={handleSubmit} className="mt-5">
                                {error && <Error text={error} />}
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">Correo Electronico</label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>

                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email}
                                                id=""
                                                placeholder="Entra tu correo"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>

                                        {touched.email && errors.email && (
                                            <p className="text-red-700">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-gray-900">Contraseña</label>

                                            <p className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                                                Has olvidado tu contraseña?
                                            </p>
                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                name="password"
                                                id=""
                                                placeholder="Entra tu contraseña"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>

                                        {touched.password && errors.password && (
                                            <p className="text-red-700">{errors.password}</p>
                                        )}
                                    </div>

                                    <AuthSubmitButton isLoading={isLoading} text="Iniciar Session" />
                                </div>
                            </form>
                        )}
                    </Formik>
                    
                    <SignFooter />
                </div>
            </div>
        </div>
    );
}

export default SignIn;