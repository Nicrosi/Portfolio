import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { timer, Subscription } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showStart = false;
  showSearch = false;
  public onCloseStart(): void {
    this.showStart = !this.showStart;
  }
  public onCloseSearch(): void {
    this.showSearch = !this.showSearch;
  }

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription: Subscription | undefined;

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
