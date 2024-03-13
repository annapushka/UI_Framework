import { FC, ReactNode } from 'react';
export interface MyButtonProps {
    children: ReactNode;
    color: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
