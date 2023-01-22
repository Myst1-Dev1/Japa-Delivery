import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: any;
    event?: any;
}

export function Button({children, className, event}: ButtonProps) {
    return (
        <button onClick={event} className={className}>{children}</button>
    )
}