import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  
  student: Student = new Student();
  id: number;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute, private router: Router){}

  getStudentById(){
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(<any>params.get("id"));
    });

    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    this.getStudentById();
  }


  goToStudentList(){
    this.router.navigate(['students']);
  }
  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(date => {
      this.goToStudentList();
    },
    error => console.log(error));
  }
}
