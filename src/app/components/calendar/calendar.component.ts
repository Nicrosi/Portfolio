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
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.currentDate.toLocaleString('default', { month: 'long' });

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    let currentCalendarDay = 1;
    let week: any = [];

    // Fill in the days of the previous month
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthDays = firstDayOfWeek === 0 ? 7 : firstDayOfWeek; // Calculate how many days from previous month to show
    for (
      let i = prevMonthLastDay - prevMonthDays + 1;
      i <= prevMonthLastDay;
      i++
    ) {
      week.push({ day: i, isCurrentMonth: false, isCurrentDay: false });
    }

    // Fill in the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDay =
        currentYear === currentDate.getFullYear() &&
        currentMonth === currentDate.getMonth() &&
        day === currentDay;

      week.push({ day, isCurrentMonth: true, isCurrentDay });
      if (week.length === 7) {
        this.calendarDays.push([...week]);
        week = [];
      }
      currentCalendarDay = day + 1;
    }

    // Fill in the days of the next month if necessary
    if (week.length > 0) {
      const nextMonthDays = 7 - week.length;
      for (let i = 1; i <= nextMonthDays; i++) {
        week.push({ day: i, isCurrentMonth: false, isCurrentDay: false });
      }
      this.calendarDays.push([...week]);
    }
  }
}
