import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Output() closeContact = new EventEmitter<void>();

  public onCloseContact(): void {
    this.closeContact.emit();
  }
}
