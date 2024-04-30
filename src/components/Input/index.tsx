import { FC, InputHTMLAttributes } from 'react';

type Props = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ className = '', label, ...props }) => {
  return (
    <div className={`${className}`}>
      {label && <p className="text-gray-20 text-sm font-bold">{label}</p>}
      <input
        className="rounded-1 bg-gray-10 border-none outline-none py-1 px-2 w-full"
        {...props}
      />
    </div>
  );
};
