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
 * ปุ่ม Success อย่างง่าย - สามารถใช้ได้ทั้งแบบ Tailwind CSS หรือใช้กับ Tailwind CSS plugin
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'success',
  className = '',
  ...props
}) => {
  // สามารถใช้ได้ทั้ง Tailwind classes โดยตรง หรือใช้งานผ่าน plugin
  const buttonClass = color === 'success' ? 'krit-btn krit-btn-success' : '';
  
  // ใช้ได้ทั้ง krit-btn ที่มาจาก plugin หรือใช้ Tailwind classes โดยตรง
  const tailwindClass = color === 'success' ? 'bg-green-600 text-white hover:bg-green-700 rounded-md px-4 py-2 font-medium' : '';
  
  // รวมทั้ง 2 แบบเข้าด้วยกัน (แบบใดแบบหนึ่งจะทำงาน ขึ้นอยู่กับการตั้งค่าของผู้ใช้)
  const classes = `${buttonClass} ${tailwindClass} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
