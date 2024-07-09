// src/custom.d.ts

export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 
        src: string; 
        trigger: string; 
        colors?: string; // Ajout de la propriété colors
      };
    }
  }
  
}
// declare module 'tw-elements' {
//     export const Carousel: any; // Ajoutez d'autres exports si nécessaire
//   }

