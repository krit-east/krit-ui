# krit-ui

ชุด UI Components สำหรับ React ที่ใช้ CSS โดยตรงและสนับสนุน Tailwind CSS

## การติดตั้ง

```bash
# ติดตั้งด้วย npm
npm install krit-ui
```

## วิธีใช้งาน

### 1. นำเข้า CSS ในไฟล์หลักของแอพพลิเคชั่น (สำคัญ)

```js
// ใน Next.js ให้นำเข้าในไฟล์ globals.css
@import 'krit-ui';  // ใช้แบบนี้ได้เลย

// หรือระบุโฟลเดอร์ styles แบบเก่า
@import 'krit-ui/styles';
```

### 2. ใช้งาน Button Component

```jsx
import { Button } from 'krit-ui';

export default function MyComponent() {
  return (
    <div>
      {/* ปุ่มพื้นฐาน */}
      <Button>ปุ่มปกติ</Button>
      
      {/* ปุ่มสีต่างๆ */}
      <Button color="info">ปุ่มข้อมูล</Button>
      <Button color="success">ปุ่มสำเร็จ</Button>
      <Button color="error">ปุ่มผิดพลาด</Button>
      <Button color="warning">ปุ่มเตือน</Button>
      <Button color="purple">ปุ่มสีม่วง</Button>
      
      {/* ใช้รหัสสีโดยตรง */}
      <Button color="#FF5733">ปุ่มสีส้มแดง</Button>
      <Button color="rgb(75, 192, 192)">ปุ่มสีเขียวมิ้นท์</Button>
      
      {/* ขนาดต่างๆ */}
      <Button size="sm">ปุ่มเล็ก</Button>
      <Button size="lg">ปุ่มใหญ่</Button>
      <Button size="full">ปุ่มเต็มความกว้าง</Button>
      
      {/* รูปแบบต่างๆ */}
      <Button variant="bordered">ปุ่มมีขอบ</Button>
      <Button variant="ghost">ปุ่มโปร่งใส</Button>
      <Button variant="light">ปุ่มสีอ่อน</Button>
      <Button variant="faded">ปุ่มสีจาง</Button>
      <Button variant="flat">ปุ่มแบน</Button>
      <Button variant="shadow">ปุ่มมีเงา</Button>
      
      {/* สถานะกำลังโหลด */}
      <Button isLoading>กำลังโหลด</Button>
      
      {/* ใช้ร่วมกับ Tailwind CSS */}
      <Button className="p-4 px-10 shadow-lg">ปุ่มปรับแต่ง</Button>
    </div>
  );
}
```

### หมายเหตุสำคัญ: การใช้งานกับ Tailwind CSS

krit-ui ออกแบบมาให้ทำงานร่วมกับ Tailwind CSS ได้อย่างราบรื่น โดย className ที่ส่งเข้ามาจากภายนอกจะมีความสำคัญสูงกว่า CSS ภายในของ krit-ui (ใช้ `!important` โดยอัตโนมัติ) ทำให้คุณสามารถปรับแต่ง style ได้อย่างอิสระ:

```jsx
// ตัวอย่างการใช้ Tailwind CSS ร่วมกับ krit-ui
<Button className="p-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
  ปุ่มแบบกำหนดเอง
</Button>
```

### คุณสมบัติ

### Button

คอมโพเนนต์ `Button` มีคุณสมบัติดังนี้:

| คุณสมบัติ | ประเภท | ค่าเริ่มต้น | คำอธิบาย |
|----------|--------|------------|----------|
| `variant` | string | 'default' | สีหรือสไตล์ของปุ่ม ('default', 'primary', 'secondary', 'success', 'warning', 'danger') |
| `size` | string | 'md' | ขนาดของปุ่ม ('none', 'sm', 'md', 'lg', 'full') |
| `styleVariant` | string | 'solid' | รูปแบบการแสดงผลของปุ่ม ('solid', 'faded', 'bordered', 'light', 'flat', 'ghost', 'shadow') |
| `isLoading` | boolean | false | สถานะกำลังโหลด แสดง spinner |

นอกจากนี้ยังรองรับคุณสมบัติทั้งหมดของ HTML button element

### คุณสมบัติใหม่: การใช้รหัสสีโดยตรง

ตั้งแต่เวอร์ชัน 0.5.0 เป็นต้นไป คุณสามารถใช้รหัสสีโดยตรงกับ prop `color` ได้:

```jsx
<Button color="#3498db">ปุ่มสีฟ้า</Button>
<Button color="rgb(52, 152, 219)">ปุ่มสีฟ้า (RGB)</Button>
<Button color="rgba(52, 152, 219, 0.8)">ปุ่มสีฟ้าโปร่งแสง</Button>
```

ปุ่มจะใช้สีที่กำหนดเป็นสีพื้นหลังและสีขอบ โดยตัวอักษรจะเป็นสีขาวโดยอัตโนมัติ

## ข้อดีของ krit-ui

- **ง่ายต่อการใช้งาน** - เพียงนำเข้า CSS และใช้ Component
- **ปรับแต่งง่าย** - สามารถใช้ className เพื่อปรับแต่งสไตล์เพิ่มเติมได้
- **ไม่ต้องอาศัย Tailwind CSS** - มาพร้อมกับ CSS โดยตรง ใช้งานได้ทันที
- **หลากหลายรูปแบบ** - รองรับหลากหลายสี ขนาด และสไตล์

## การใช้งานกับ Next.js

ใน Next.js ให้นำเข้า CSS ในไฟล์ globals.css ดังนี้:

```css
/* หากใช้ Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* นำเข้า CSS สำหรับ krit-ui */
@import 'krit-ui';
```

หากพบข้อผิดพลาดเกี่ยวกับไฟล์ CSS ใน Next.js ให้ลองวิธีนี้:

1. ใช้ `import` แทน `@import` ในไฟล์ CSS:

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* วิธีแก้ปัญหา */
@import url('krit-ui');
```

2. หรือนำเข้าใน `_app.jsx` หรือ `app/layout.jsx`:

```jsx
// _app.jsx หรือ app/layout.jsx
import 'krit-ui';
```

## License

MIT
