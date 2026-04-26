import { Component, signal } from '@angular/core';
import { Heading } from './heading/heading';
import { SearchForm } from './search-form/search-form';
import { CourseTable } from './course-table/course-table';
import { CourseService } from './services/course-service';

@Component({
  selector: 'app-root',
  imports: [Heading, SearchForm, CourseTable],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TypeScript | labb4');
  constructor(private coursesService: CourseService) {
    this.coursesService.loadCourses()
  }
}
