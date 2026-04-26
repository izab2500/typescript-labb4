import { Component, signal } from '@angular/core';
import { CourseService } from './services/course-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TypeScript | labb4');
  constructor(private coursesService: CourseService) { 
    this.coursesService.loadCourses()
  }
}
