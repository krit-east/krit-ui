# Krit UI

ไลบรารี UI อย่างง่ายที่ทำงานร่วมกับ Tailwind CSS 4 สำหรับโปรเจค NextJS 15.2.2 ขึ้นไป

## วิธีการติดตั้ง

```bash
npm install krit-ui
```

## วิธีการใช้งาน

### วิธีที่ 1: ใช้ผ่าน @plugin directive ใน CSS (แนะนำ)

```css
/* globals.css */
@import "tailwindcss";
@plugin "kritui";

/* กำหนดสีของปุ่ม success (ถ้าต้องการเปลี่ยนจากค่าเริ่มต้น) */
@theme {
  --krit-color-success: #16a34a;
  --krit-color-success-hover: #15803d;
}
```

แล้วใช้งานใน HTML หรือ JSX:

```html
<button class="krit-btn krit-btn-success">ปุ่ม Success</button>
```

### วิธีที่ 2: ใช้ผ่าน JavaScript/TypeScript

```javascript
// tailwind.config.js
const { kritUIPlugin } = require('krit-ui');

module.exports = {
  plugins: [
    kritUIPlugin
  ],
}
```

### วิธีที่ 3: ใช้งานแบบ React Component

เวอร์ชัน 0.1.3 มีการเพิ่ม React Component สำหรับใช้งานได้ง่ายยิ่งขึ้น:

```jsx
import { Button } from 'krit-ui';

export default function MyPage() {
  return (
    <div>
      <h1>ทดสอบปุ่ม Krit UI</h1>
      
      {/* ใช้งานแบบง่ายที่สุด */}
      <Button>ปุ่มสีเขียว</Button>
      
      {/* ระบุขนาด size (sm, md, lg) */}
      <Button size="sm">ปุ่มขนาดเล็ก</Button>
      
      {/* ระบุสี (ตอนนี้มีแค่ success) */}
      <Button color="success">ปุ่ม Success</Button>
      
      {/* เพิ่ม className และ onClick event */}
      <Button className="mt-4" onClick={() => alert('คลิก!')}>
        ปุ่มพร้อม Event
      </Button>
    </div>
  );
}
```

## คุณสมบัติ

- **ปุ่มสี Success**: ใช้ class `krit-btn krit-btn-success` หรือ `<Button color="success">` สำหรับปุ่มสีเขียว
- **การปรับแต่ง**: สามารถปรับแต่งสีได้ผ่านตัวแปร CSS `--krit-color-success` และ `--krit-color-success-hover`
- **React Component**: ใช้งานง่ายผ่าน `<Button>` component

## ใบอนุญาต

MIT
