import { Component, EventEmitter, Output } from '@angular/core';
import { growAndFadeAnimation } from 'src/app/grow-and-fade.animation';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [growAndFadeAnimation],
})
export class ProjectsComponent {
  @Output() closeProjects = new EventEmitter<void>();

  public onCloseProjects(): void {
    this.closeProjects.emit();
  }
  public goToDogs(): void {
    window.open('https://pi-dogs-ruby.vercel.app/', '_blank');
  }
  public goToDogsGh(): void {
    window.open('https://github.com/Nicrosi/PI-dogs', '_blank');
  }
  public goToSynnet(): void {
    window.open('http://proyecto-final-rho-three.vercel.app/', '_blank');
  }
  public goToSynnetGh(): void {
    window.open('https://github.com/Nicrosi/Proyecto-Final', '_blank');
  }
}
