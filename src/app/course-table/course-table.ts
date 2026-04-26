import { Component, WritableSignal } from '@angular/core';
import { CourseService } from '../services/course-service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-course-table',
  imports: [UpperCasePipe],
  templateUrl: './course-table.html',
  styleUrl: './course-table.css',
})
export class CourseTable {
  sortByColumn: string = "";
  sortAsc: boolean = true;
  sortDesc: boolean = false;

  courses: WritableSignal<any[]>;
  constructor(public courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  manageSort(col: string) {
    const column = col;

    if (this.sortByColumn === column) {
      this.sortAsc = !this.sortAsc;
      this.sortDesc = !this.sortDesc
    }

    if (this.sortByColumn !== "" && this.sortByColumn !== column) {
      this.sortAsc = true;
      this.sortDesc = false;
    }

    if (!this.sortByColumn || this.sortByColumn !== column) {
      this.setSortBycolumn(column as string)
    }

    this.sortAsc ? this.sortAscending() : this.sortDescending();
  }

  setSortBycolumn(colName: string): void {
    this.sortByColumn = colName;
  }

  sortAscending(): void {
    const c = [...this.courses()];
    c.sort((a, b) => String(a[this.sortByColumn]).localeCompare(String(b[this.sortByColumn]), "sv"))
    this.courses.set(c)
  }

  sortDescending(): void {
    const c = [...this.courses()];
    c.sort((a, b) => String(b[this.sortByColumn]).localeCompare(String(a[this.sortByColumn]), "sv"))
    this.courses.set(c)
  }
}
