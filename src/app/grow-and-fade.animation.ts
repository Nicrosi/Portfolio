import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const growAndFadeAnimation = trigger('growAndFade', [
  transition(':enter', [
    style({
      opacity: 0, // Start with 0 opacity
      transform: 'scale(0.8)', // Start with 80% scale
    }),
    animate(
      '150ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0.8)', offset: 0 }), // Initial styles
        style({ opacity: 1, transform: 'scale(1)', offset: 1 }), // Final styles
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '150ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale(1)', offset: 0 }), // Initial styles
        style({ opacity: 0, transform: 'scale(0.8)', offset: 1 }), // Final styles
      ])
    ),
  ]),
]);
