// Type declaration file for Tailwind CSS
declare module 'tailwindcss/types/config' {
  export interface PluginAPI {
    addComponents: (components: Record<string, any>, options?: any) => void;
    addBase: (baseStyles: Record<string, any>) => void;
    addUtilities: (utilities: Record<string, any>, options?: any) => void;
    theme: (path: string, defaultValue?: any) => any;
    corePlugins: (path: string) => boolean;
    matchUtilities: (utilities: Record<string, any>, options?: any) => void;
  }
}
