import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';
  showAbout = false;
  showContact = false;
  showProjects = false;
  public onCloseAbout(): void {
    this.showAbout = !this.showAbout;
  }
  public onCloseContact(): void {
    this.showContact = !this.showContact;
  }
  public onCloseProjects(): void {
    this.showProjects = !this.showProjects;
  }
}
