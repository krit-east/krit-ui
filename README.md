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
@plugin "krit-ui";

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

```js
// tailwind.config.js
const { kritUIPlugin } = require('krit-ui');

module.exports = {
  plugins: [
    kritUIPlugin
  ],
}
```

## คุณสมบัติ

- **ปุ่มสี Success**: ใช้ class `krit-btn krit-btn-success` สำหรับปุ่มสีเขียว
- **การปรับแต่ง**: สามารถปรับแต่งสีได้ผ่านตัวแปร CSS `--krit-color-success` และ `--krit-color-success-hover`

## ใบอนุญาต

MIT
