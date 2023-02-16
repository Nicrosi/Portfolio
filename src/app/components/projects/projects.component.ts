import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Output() closeProjects = new EventEmitter<void>();

  public onCloseProjects(): void {
    this.closeProjects.emit();
  }
}
