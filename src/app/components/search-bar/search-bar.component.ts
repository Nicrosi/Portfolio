import { Component, EventEmitter, Output } from '@angular/core';
import { slideUpAnimation } from '../../slide-up.animation';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  animations: [slideUpAnimation],
})
export class SearchBarComponent {
  today = new Date();
  month = this.today.getMonth();
  monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  currentMonth = this.monthName[this.month];
}
