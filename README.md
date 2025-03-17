# Krit UI Button

ปุ่ม Success สำหรับ NextJS 15.2.2 ขึ้นไป กับ Tailwind CSS 4 แบบง่ายๆ

## วิธีการติดตั้ง

```bash
npm install krit-ui
```

## วิธีการใช้งาน

ใช้งานง่ายๆ แค่ import แล้วใช้ได้เลย:

```jsx
import { Button } from 'krit-ui';

export default function MyPage() {
  return (
    <div>
      <h1>ทดสอบปุ่ม Krit UI</h1>
      
      {/* ใช้งานแบบพื้นฐาน */}
      <Button>ปุ่มสีเขียว</Button>
      
      {/* เพิ่ม className เพื่อปรับแต่ง */}
      <Button className="px-10">ปุ่มกว้างขึ้น</Button>
      
      {/* เพิ่ม event handlers */}
      <Button onClick={() => alert('คลิก!')}>
        คลิกฉัน!
      </Button>
    </div>
  );
}
```

## คุณสมบัติ

- **เรียบง่าย**: ใช้ Tailwind CSS 4 classes โดยตรง
- **ไม่ต้องตั้งค่าเพิ่มเติม**: ไม่ต้องกำหนดค่าใน tailwind.config.js หรือใน CSS
- **ใช้งานง่าย**: แค่ import แล้วใช้งานได้เลย
- **รองรับ All Props ของ Button**: สามารถใช้ props ทั้งหมดของ HTML button เช่น onClick, disabled, type ฯลฯ

## Props ที่รองรับ

| Prop | Type | Default | คำอธิบาย |
|------|------|---------|----------|
| `color` | `'success'` | `'success'` | สีของปุ่ม (มีเฉพาะ success) |
| `className` | `string` | `''` | คลาสเพิ่มเติม (ใช้ Tailwind CSS ได้) |

## ใบอนุญาต

MIT
