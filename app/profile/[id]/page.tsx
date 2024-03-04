"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";

import avatar from "@/public/images/profile-avatar.png";
import { profileOptions } from "@/utils/profileData";
import EmptyView from "@/components/EmptyView";
import UserLoanBook from "@/components/UserLoanBook";
import { userLoanBook } from "@/actions/userLoanBook";
import UserReservedBook from "@/components/UserReservedBook";

const UserProfile: React.FC = () => {
    const { data: session } = useSession();
    const { id }: Params = useParams();
    const [optionSelected, setOptionSelected] = useState<number>(0);

    const deleteAccount = () => {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className="bg-gray-100 text-primary">
            <div className="max-w-7xl h-full px-6 lg:px-8 mx-auto min-h-screen py-12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-2 border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                    <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
                        <div className="flex items-center flex-wrap mb-6 xl:flex-nowrap">
                            <div className="mb-5 mr-5">
                                <div className="relative inline-block shrink-0 rounded-2xl">
                                    <Image
                                        className="inline-block shrink-0 border  rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                        src={avatar}
                                        alt="image"
                                    />
                                    <div className="group/tooltip relative">
                                        <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-1 end-0 -mb-1 -mr-1  border border-white"></span>
                                        <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block"> Status: Active </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grow">
                                <div className="flex flex-wrap items-center justify-between mb-2">
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-2">
                                            <a
                                                className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                                                href="javascript:void(0)"> {session?.user?.name} </a>
                                        </div>
                                        <div className="flex flex-wrap pr-2 mb-4 font-medium">
                                            <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="javascript:void(0)">
                                                <span className="mr-2">
                                                    <EnvelopeIcon className="h-5s w-5" />
                                                </span> {session?.user?.email} </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap my-auto text-sm gap-x-4">
                                        <button
                                            onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}
                                            className="inline-block px-6 py-2 font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border shadow-none cursor-pointer rounded-md bg-light border-primary border-light hover:bg-light-dark"
                                        > Cerrar sesión
                                        </button>

                                        <button
                                            onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}
                                            className="inline-block px-4 py-2 font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-md bg-red-600 hover:bg-secondary"
                                        > Borrar mi cuenta
                                        </button>
                                        
                                        <dialog id="my_modal_1" className="modal text-primary">
                                            <div className="modal-box rounded-md bg-white">
                                                <h3 className="font-bold text-lg">Cerrar Sesión!</h3>
                                                <p className="py-4">¿Quieres cerrar tu sesión? Haga clic en cancelar si no estás seguro o confirme su decisión.</p>
                                                <div className="modal-action">
                                                    <form method="dialog" className="flex items-center gap-5">
                                                        <button
                                                            className="border-2 border-primary hover:opacity-80 transition-all duration-200 ease-in px-4 py-2 rounded"
                                                        >
                                                            Cancelar
                                                        </button>

                                                        <button
                                                            onClick={() => signOut()}
                                                            className="bg-red-600 hover:opacity-80 text-white transition-all duration-200 ease-in px-4 py-2 rounded"
                                                        >Confirmar
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                        <dialog id="my_modal_2" className="modal text-white">
                                            <div className="modal-box rounded-md">
                                                <h3 className="font-bold text-lg">Borrar Cuenta!</h3>
                                                <p className="py-4">¿Quieres cborrar tu cuenta? Haga clic en cancelar si no estás seguro o confirme su decisión.</p>
                                                <div className="modal-action">
                                                    <form method="dialog" className="flex items-center gap-5">
                                                        <button
                                                            className="border-2 border-white hover:opacity-80 transition-all duration-200 ease-in px-4 py-2 rounded"
                                                        >Cancelar
                                                        </button>

                                                        <button
                                                            onClick={() => deleteAccount()}
                                                            className="bg-red-600 hover:opacity-80 text-white transition-all duration-200 ease-in px-4 py-2 rounded"
                                                        >Confirmar
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="w-full h-px border-neutral-200" />
                        <ul nav-tabs className="group flex gap-4 flex-wrap items-stretch text-[1.1rem] list-none active-assignments">
                            {profileOptions.map((data, ind) => (
                                <li key={ind}
                                    className={`${ind === optionSelected ? "border-b-green-500 text-green-500" : "border-b-white"} border-b-2 px-3 py-2 my-4 cursor-pointer transition-all duration-150 ease-in-out`}
                                    onClick={() => setOptionSelected(data.index)}
                                >
                                    {data.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="py-6">
                    {optionSelected === 0 ? (
                        <UserLoanBook id={id} />
                    ) : (
                        <UserReservedBook id={id} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;