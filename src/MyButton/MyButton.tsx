import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './MyButton.css';

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    big?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
    children,
    color,
    big = false,
    ...props
}: MyButtonProps) => {
    const rootClasses = ['my-button']
    if (big) {
        rootClasses.push('big-btn');
    }

    return (
        <button {...props} className={rootClasses.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;