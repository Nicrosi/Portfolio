import { animate, style, transition, trigger } from '@angular/animations';

export const slideLeftAnimation = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
  ]),
]);
