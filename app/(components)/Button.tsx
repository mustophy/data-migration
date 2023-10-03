import { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    children: ReactNode
}

export function ActionButton ({ children, className} : ButtonProps) {
    return (
        <button className={`px-8 py-[18px] text-white bg-black rounded-[50px] text-xs leading-3 uppercase font-[600] ${className}`}>
            {children}
        </button>
    )
}