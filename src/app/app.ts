import { Component, signal } from '@angular/core';
import { Heading } from './heading/heading';
import { CourseService } from './services/course-service';
import { SearchForm } from './search-form/search-form';

@Component({
  selector: 'app-root',
  imports: [Heading,SearchForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TypeScript | labb4');
  constructor(private coursesService: CourseService) { 
    this.coursesService.loadCourses()
  }
}
