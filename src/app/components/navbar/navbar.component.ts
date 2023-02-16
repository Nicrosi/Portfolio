import { Component } from '@angular/core';

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
}
