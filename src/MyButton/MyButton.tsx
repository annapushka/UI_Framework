import React, { FC, ReactNode } from 'react';

export interface MyButtonProps {
    children: ReactNode;
    color: string;
}

const MyButton: FC<MyButtonProps> = ({
    children,
    color,
    ...props
}) => {
    return (
        <button {...props} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;