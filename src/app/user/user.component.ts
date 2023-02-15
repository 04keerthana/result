import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

 students: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.students;
    this.studentService.sortStudentsByMarks();
  }

  markClass(marks: number) {
    return this.studentService.getMarkClass(marks);
  }
  
}


