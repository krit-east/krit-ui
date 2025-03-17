import type { PluginAPI } from 'tailwindcss/types/config';

export default function kritUIPlugin(api: PluginAPI) {
  // กำหนด class สำหรับปุ่ม
  api.addComponents({
    // ปุ่มพื้นฐาน
    '.krit-btn': {
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'border-radius': '0.375rem',
      'font-weight': '500',
      'padding': '0.5rem 1rem',
      'transition-property': 'color, background-color, border-color',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
      'cursor': 'pointer',
    },

    // ปุ่มสี Success
    '.krit-btn-success': {
      'background-color': 'var(--krit-color-success, #16a34a)',
      'color': 'white',
      '&:hover': {
        'background-color': 'var(--krit-color-success-hover, #15803d)',
      },
      '&:focus': {
        'outline': 'none',
        'box-shadow': '0 0 0 2px rgba(22, 163, 74, 0.5)',
      },
    }
  });
}
