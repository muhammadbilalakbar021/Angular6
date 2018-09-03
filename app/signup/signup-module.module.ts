import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from'@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AlertsModule } from 'angular-alert-module';
import { DialogComponent } from './teacher/teacher.component';
import { PromptComponent } from './teacher/prompt/prompt.component';

// const applicationRouter:Routes=
// [
  
//   {path:'teacher',component:TeacherComponent},
//   {path:'student',component:StudentComponent}
// ];


@NgModule({
  imports: [
    CommonModule,
    AlertsModule.forRoot()
    // RouterModule.forRoot(applicationRouter),
  ],
  declarations: [DialogComponent, PromptComponent]
})
export class SignupModuleModule { }
