import { ButtonHTMLAttributes, FC } from 'react';
import './MyButton.css';
export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    big?: boolean;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
