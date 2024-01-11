import { Component } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('blub', [
      transition('* => void', [
        query('@*', [animateChild()], { optional: true }),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  showStart: boolean = false;
  showSearch: boolean = false;

  toggleStart() {
    this.showStart = !this.showStart;
  }

  toggleSearch() {
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
