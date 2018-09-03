import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from'@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { QuestionformComponent } from './questionform/questionform.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {StudentComponent} from './signup/student/student.component'
import {TeacherComponent} from './signup/teacher/teacher.component';
import { SliderComponent } from './home/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { DeleteConfirmComponent } from './questionform/delete-confirm/delete-confirm.component';
import { AddQuestionComponent } from './questionform/add-question/add-question.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HelpComponent } from './help/help.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogComponent} from './signup/teacher/teacher.component';
import {PromptComponent} from './signup/teacher/prompt/prompt.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BottomSheetComponent } from './admin-panel/bottom-sheet/bottom-sheet.component';
import { OverlayModule } from "@angular/cdk/overlay";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { HomeComponent } from './home/home.component';
// import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FrontComponent } from './home/front/front.component'

const appRouter:Routes=
[

  {path:'home',component:HomeComponent},
  {path:'QusetionForm',component:QuestionformComponent},
  {path:'CategoryForm',component:CategoryformComponent},
  {path:'SignupForm',component:SignupComponent},
  {path:'LoginForm',component:LoginComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'About',component:AboutComponent},
  {path:'Help',component:HelpComponent},
  {path:'adminPanel',component:AdminPanelComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    QuestionformComponent,
    CategoryformComponent,
    MainNavComponent,
    TeacherComponent,
    StudentComponent,
    SliderComponent,
    DeleteConfirmComponent,
    AddQuestionComponent,
    AboutComponent,
    HelpComponent,
    DialogComponent,
    PromptComponent,
    AdminPanelComponent,
    BottomSheetComponent,
    HomeComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule, 
    NgbModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    ModalDialogModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,   
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    OverlayModule,
    MatBottomSheetModule,
    AngularFontAwesomeModule,
        
  ],
  entryComponents: [DialogComponent,PromptComponent,BottomSheetComponent],
  providers: [MatTooltipModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
