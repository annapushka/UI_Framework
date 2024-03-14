import React, { FC, InputHTMLAttributes } from 'react';
import './MyInput.css';

export interface MyInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    big?: boolean;
    label?: string;
}

const MyInput: FC<MyInputProps> = ({
    big,
    placeholder,
    label,
    ...props
}: MyInputProps) => {
    const classes = ['my-input']
    if (big) {
        classes.push('big-input');
    }
    return (
        <label>
            {label}
            <input className={classes.join(' ')} placeholder={placeholder} {...props}/>
        </label>
    );
};

export default MyInput;