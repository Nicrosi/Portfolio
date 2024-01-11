import { Component, EventEmitter, Output } from '@angular/core';
import { growAndFadeAnimation } from 'src/app/grow-and-fade.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [growAndFadeAnimation],
})
export class AboutComponent {
  @Output() closeAbout = new EventEmitter<void>();

  myText: string =
    "Hello, I'm Guillermo Nicrosi, welcome to my portfolio!\nAs you can probably tell, it's an Angular based replica of Windows 11, but why?\n\nWell, after recently upgrading my system to W11, I became quite fond of it's sleek design and quality of life features, so I became inspired to base my portfolio on it!\n\nPlease take your time exploring, there are still features I've yet to add, but I hope you enjoy your time here nonetheless!";

  public onCloseAbout(): void {
    this.closeAbout.emit();
  }
}
