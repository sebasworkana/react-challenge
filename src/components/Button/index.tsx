import { ButtonHTMLAttributes, FC } from 'react';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ className = '', children, ...props }) => {
  return (
    <button
      className={`${className} border-none outline-none bg-success text-white py-2 px-3 cursor-pointer hover:opacity-80 rounded-2`}
      {...props}
    >
      {children}
    </button>
  );
};
