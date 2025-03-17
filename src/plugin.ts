// นี่คือ Tailwind CSS plugin สำหรับ krit-ui
// ทำหน้าที่เหมือน DaisyUI โดยเพิ่ม components ให้กับ Tailwind CSS

interface PluginAPI {
  addComponents: (components: any) => void;
  addBase: (base: any) => void;
  theme: (path: string, defaultValue?: any) => any;
}

/**
 * Plugin สำหรับ Tailwind CSS เพื่อเพิ่มคอมโพเนนต์ของ krit-ui
 */
function kritUIPlugin(api: PluginAPI): void {
  // เพิ่ม component สำหรับปุ่ม Success
  api.addComponents({
    '.krit-btn': {
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'border-radius': '0.375rem', // rounded-md
      'font-weight': '500', // font-medium
      'padding': '0.5rem 1rem', // px-4 py-2
      'cursor': 'pointer', 
      'transition-property': 'background-color, color',
      'transition-duration': '200ms',
    },
    '.krit-btn-success': {
      'background-color': '#16a34a', // bg-green-600
      'color': 'white',
      '&:hover': {
        'background-color': '#15803d', // bg-green-700
      },
    }
  });
}

export default kritUIPlugin;
