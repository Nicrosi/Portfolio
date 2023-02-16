import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  @Output() closeStart = new EventEmitter<void>();

  public onCloseStart(): void {
    this.closeStart.emit();
  }
}
