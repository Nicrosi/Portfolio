import { Component, OnInit } from '@angular/core';
import { slideLeftAnimation } from 'src/app/slide-left.animation';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [slideLeftAnimation],
})
export class CalendarComponent implements OnInit {
  days: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  calendarDays: any = [];

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();

    let currentDay = 1;
    let week: any = [];
    // Fill in the leading empty cells before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      week.push(0);
    }

    // Fill in the days of the month
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const isCurrentDay =
        day === currentDate.getDate() &&
        month === currentDate.getMonth() &&
        year === currentDate.getFullYear();

      week.push({
        day,
        isCurrentDay,
      });

      // Start a new week when reaching Saturday (index 6)
      if (week.length === 7) {
        this.calendarDays.push([...week]);
        week = [];
      }

      currentDay = day + 1;
    }

    // Fill in the trailing empty cells after the last day of the month
    for (let i = lastDayOfWeek + 1; i < 7; i++) {
      week.push(0);
    }

    // Add the last week to the calendarDays array
    this.calendarDays.push([...week]);
  }
}
