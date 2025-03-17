// เป็น entry point หลักของไลบรารี krit-ui
// สำหรับใช้งานแบบ React Component

// นำเข้า plugin เพื่อให้สามารถใช้งานได้แบบ JS/TS โดยตรง
import kritUIPlugin from './plugin';

// นำเข้า React Components
import Button from './components/Button';
export type { ButtonProps } from './components/Button';

// ส่งออก components
export { Button, kritUIPlugin };

// ส่งออก default component
export default Button;
