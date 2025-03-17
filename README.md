# krit-ui

ปุ่ม Success อย่างง่ายสำหรับ NextJS 15.2.2 ขึ้นไป กับ Tailwind CSS 4

## การติดตั้ง

```bash
# ติดตั้งด้วย npm
npm install krit-ui
```

## วิธีใช้งาน

มี 2 วิธีในการใช้งาน krit-ui:

### วิธีที่ 1: ใช้งานแบบ React Component ธรรมดา (กับ Tailwind CSS)

```jsx
import { Button } from 'krit-ui';

export default function MyComponent() {
  return (
    <div>
      <Button>ปุ่ม Success</Button>
    </div>
  );
}
```

### วิธีที่ 2: ใช้งานแบบ Tailwind CSS Plugin

#### 1. เพิ่ม plugin ในไฟล์ tailwind.config.js หรือ .mjs:

```js
import { kritUIPlugin } from 'krit-ui';

export default {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [
    kritUIPlugin,
    // ...
  ],
};
```

#### 2. นำเข้า CSS ของ krit-ui ในไฟล์ globals.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* นำเข้า CSS สำหรับ krit-ui */
@import 'krit-ui/styles';
```

#### 3. นำไปใช้ในหน้าเว็บ:

```jsx
import { Button } from 'krit-ui';

export default function MyComponent() {
  return (
    <div>
      <Button>ปุ่ม Success</Button>
    </div>
  );
}
```

## Features

- สามารถใช้งานได้ทั้งแบบ React Component ธรรมดาและแบบ Tailwind CSS Plugin
- รองรับ NextJS 15.2.2 ขึ้นไปและ Tailwind CSS 4
- สามารถใช้งานร่วมกับ Tailwind CSS classes ได้

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
