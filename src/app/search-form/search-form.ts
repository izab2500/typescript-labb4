import { Component, WritableSignal, effect } from '@angular/core';
import { CourseService } from '../services/course-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [FormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm {
  searchString: string = "";
  allCourses: any[] = [];
  courses: WritableSignal<any[]>;
  constructor(public courseService: CourseService) {
    this.courses = courseService.getCourses();
    effect(() => {
      const data = this.courses();
      if (data.length > 0 && this.allCourses.length === 0) {
        this.allCourses = [...data];
      }
    });
  }

  filterTable() {
    const search = this.searchString.trim().toLowerCase();
    if (!search) {
      this.courses.set([...this.allCourses]);
      return;
    }
    const filtered = this.allCourses.filter(c =>
      c.code.toLowerCase().includes(search) ||
      c.coursename.toLowerCase().includes(search)
    );

    this.courses.set(filtered);
  }

}
