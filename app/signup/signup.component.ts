import { Component, OnInit } from '@angular/core';

export type Signup ='Teacher'|'Student';

@Component({
  //selector: 'app-signup',
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form:Signup='Teacher';

  constructor() { }

  ngOnInit() {  }

  

  get showTeacherProfile() {
    return this.form === 'Teacher';
  }

  get showStudentProfile() {
    return this.form === 'Student';
  }

  toggleProfile(type: Signup) {
    this.form = type;
  }

}
