import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';
  showAbout = false;
  showProjects = false;
  public onCloseAbout(): void {
    this.showAbout = !this.showAbout;
  }
  public onCloseProjects(): void {
    this.showProjects = !this.showProjects;
  }
  public goToGithub(): void {
    window.open('https://github.com/Nicrosi/', '_blank');
  }
  public goToMail(): void {
    location.href = 'mailto:guillermo.nicrosi@hotmail.com?subject=Contact';
  }
  public goToLinkedIn(): void {
    window.open('https://www.linkedin.com/in/guillermo-nicrosi/', '_blank');
  }
  public goToCv(): void {
    window.open(
      'https://drive.google.com/file/d/1glMcvLmCru-PaMi2uz96jU9IDVImvHDU/view?usp=share_link',
      '_blank'
    );
  }
}
