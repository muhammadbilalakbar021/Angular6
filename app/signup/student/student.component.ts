import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-student',
  //selector: 'app-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit 
{
  StudentForm=this.form.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    address:this.form.group({
      street:[''],
      city:[''],
      State:[''],
      zipCode:['']
    }),
    phoneNo:this.form.array([
      this.form.control('')
    ])
  });

  get phoneNo()
  {
    return this.StudentForm.get('phoneNo') as FormArray;
  }

    constructor(private form :FormBuilder) { }

  ngOnInit() {}
  
  addPhoneNo()
  {
    this.phoneNo.push(this.form.control(''))
  }
  onSubmit()
  {
    console.warn(this.StudentForm.value);
  }
  
  
}
