import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * สีของปุ่ม (มีเฉพาะ success เท่านั้น)
   */
  color?: 'success';
  /**
   * คลาสเพิ่มเติม (ใช้ Tailwind CSS classes ได้)
   */
  className?: string;
}

/**
 * ปุ่ม Success อย่างง่าย - ใช้ Tailwind CSS 4 classes โดยตรง
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'success',
  className = '',
  ...props
}) => {
  // ใช้ Tailwind CSS 4 classes โดยตรง
  const classes = `
    rounded-md font-medium px-4 py-2 
    ${color === 'success' ? 'bg-green-600 text-white hover:bg-green-700' : ''}
    ${className}
  `;

  return (
    <button className='bg-green-600' {...props}>
      {children}
    </button>
  );
};

export default Button;
