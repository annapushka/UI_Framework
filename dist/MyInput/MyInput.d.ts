import { FC, InputHTMLAttributes } from 'react';
import './MyInput.css';
export interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    big?: boolean;
    label?: string;
}
declare const MyInput: FC<MyInputProps>;
export default MyInput;
