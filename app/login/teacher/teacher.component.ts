import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  private alerts: AlertsService
  constructor() { }

  ngOnInit() {  }

  mail= new FormControl('');
  password= new FormControl('');

  Submit()
  {
    this.alerts.setMessage("Your form has been Submitted","success");
  }

  Update()
  {
    this.alerts.setMessage("Your form has been Submitted","error");
  }
}
