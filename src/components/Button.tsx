import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * สีของปุ่ม (ตอนนี้รองรับแค่ success เท่านั้น)
   */
  color?: 'success';
  /**
   * ขนาดของปุ่ม
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * คลาสเพิ่มเติม (สามารถใช้ Tailwind CSS classes ได้)
   */
  className?: string;
}

/**
 * Button component ที่ใช้งานได้ง่าย
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'success',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'krit-btn';
  const colorClasses = {
    success: 'krit-btn-success'
  } as const;

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  } as const;

  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
