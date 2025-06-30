import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
}) => {
  const className =
    variant === 'primary'
      ? 'bg-blue-500 text-white'
      : 'bg-gray-200 text-gray-800';
  return (
    <button className={`${className} px-4 py-2 rounded-md`} onClick={onClick}>
      {children}
    </button>
  );
};
