import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Output() closeAbout = new EventEmitter<void>();

  public onCloseAbout(): void {
    this.closeAbout.emit();
  }
}
