import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  students = [
    {
      name: 'Ramesh',
      course: 'B.A',
      enrollNumber: '10231',
      stream: 'Economics',
      marks: 75
    },
    {
      name: 'Suresh',
      course: 'B.Com',
      enrollNumber: '10232',
      stream: 'Business',
      marks: 28
    },
    {
      name: 'Riebiksh',
      course: 'B.Sc',
      enrollNumber: '10233',
      stream: 'Maths(H)',
      marks: 80
    }
  ];


  sortStudentsByMarks() {
    this.students.sort((a, b) => b.marks - a.marks);
  }

  getMarkClass(marks: number) {
    if (marks >= 80) {
      return 'text-success';
    } else if (marks >= 60) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }

}
