import  { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * สีหรือสไตล์ของปุ่ม
   * @default 'default'
   */
  color?:
    | 'default'
    | 'info'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | string; // รองรับรหัสสี เช่น #000000
  
  /**
   * ขนาดของปุ่ม
   * @default 'md' 
   */
  size?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * รูปแบบการแสดงผลของปุ่ม
   * @default 'solid'
   */
  variant?:
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';
  
  /**
   * สถานะกำลังโหลด แสดง spinner
   * @default false
   */
  isLoading?: boolean;
}

/**
 * ปุ่มที่ใช้งานได้หลากหลายรูปแบบ ใช้ CSS classes โดยตรง
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      color = 'default',
      size = 'md',
      variant = 'solid',
      isLoading = false,
      disabled,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    // สร้าง CSS classes จากการรวม base class กับ color, size และ variant
    const baseClasses = 'krit-btn';
    const sizeClass = `krit-btn-${size}`;
    
    // ตรวจสอบว่า color เป็นรหัสสีหรือไม่ (เช่น #000000)
    const isColorCode = color.startsWith('#') || color.startsWith('rgb');
    
    // ถ้าเป็นรหัสสี ให้ใช้ inline style แทน class
    const variantClass = isColorCode ? '' : `krit-btn-${color}-${variant}`;
    const loadingClass = isLoading ? 'krit-btn-loading' : '';
    
    // แปลง className จากภายนอกให้มี !important
    const externalClasses = className
      .split(' ')
      .filter(Boolean)
      .map(cls => `${cls}!`)
      .join(' ');
    
    // รวม classes ทั้งหมด โดยให้ className ที่ส่งเข้ามาจากภายนอกมีความสำคัญสูงสุด
    const classes = [
      baseClasses,
      sizeClass,
      variantClass,
      loadingClass,
    ].filter(Boolean).join(' ');
    
    // สร้าง inline style สำหรับรหัสสี
    const buttonStyle = isColorCode ? {
      backgroundColor: color,
      borderColor: color,
      color: '#ffffff', // ตัวอักษรสีขาวเมื่อใช้รหัสสี
      ...(style || {})
    } : style;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${classes} ${externalClasses}`}
        // className='bg-purple-500'
        style={buttonStyle}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
export default Button;
