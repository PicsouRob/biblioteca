"use client";

import { ReactNode } from "react";

interface InputFieldProps {
    name: string,
    type?: string,
    label: string,
    value: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder: string,
    children?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
    handleChange, value, label, placeholder, name, type = 'text', children
}) => {
    return (
        <div
            className="pt-4 w-full"
        >
            <label
                htmlFor={name}
                className=""
            >
                {label}
            </label>
            
            <div
                className="flex overflow-hidden items-center py-1 mt-2 w-full rounded border border-grayy-400 transition-all focus-within:border-primary h-12 px-2"
            >
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="px-3 py-5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                />
            </div>

            {children}
        </div>
    );
}

export default InputField;