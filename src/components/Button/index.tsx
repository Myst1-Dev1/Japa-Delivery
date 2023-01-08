import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: any;
}

export function Button({children, className}: ButtonProps) {
    return (
        <button className={className}>{children}</button>
    )
}