import React from 'react';

type AuthSubmitButton = {
    text: string,
    isLoading: boolean,
}

const AuthSubmitButton: React.FC<AuthSubmitButton> = ({ text, isLoading }) => {
    return (
        <div className="pt-3">
            <button
                className="transition-all duration-200 border border-transparent rounded-md bg-primary focus:outline-none hover:opacity-80 focus:opacity-80 py-4 w-full text-white focus:ring-4 focus:ring-gray-100 flex items-center gap-3 justify-center font-medium"
                type="submit"
            >
                <p className="">{isLoading ? "Patientez..." : text}</p>
                {isLoading && (<div
                    className="h-4 w-4 rounded-full border-l-2 border-t-2 border-white border-right-secondary animate-spin"
                />)}
            </button>
        </div>
    );
}

export default AuthSubmitButton;