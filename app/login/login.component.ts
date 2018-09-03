import { Component, OnInit } from '@angular/core';

export type Signup ='Teacher'|'Student';

@Component({
  selector: 'app-root',
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:Signup='Teacher';
  constructor() { }

  ngOnInit() {
  }
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
