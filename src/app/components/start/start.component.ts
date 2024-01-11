import { Component, EventEmitter, Output } from '@angular/core';
import { slideUpAnimation } from '../../slide-up.animation';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [slideUpAnimation],
})
export class StartComponent {}
