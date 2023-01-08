import { InputHTMLAttributes } from 'react';
import './style.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input {...props}/>
    )
}