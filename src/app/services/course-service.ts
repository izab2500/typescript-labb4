import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses = signal<any[]>([])
  url: string = " https://webbutveckling.miun.se/files/ramschema.json";
  constructor(private http: HttpClient) { }
  loadCourses() {
    this.http.get<any[]>(this.url).subscribe({
      next: result => this.courses.set(result),
      error: err => console.error(err)
    })
  }
  getCourses(): WritableSignal<any[]> {
    return this.courses;
  }
}
