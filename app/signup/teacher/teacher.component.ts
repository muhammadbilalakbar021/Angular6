import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Inject} from '@angular/core';
import {PromptComponent} from './prompt/prompt.component'




@Component({
  selector: 'app-teacher',
  //selector: 'app-root',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit 
{ 
  dialogName:string;
  dialogInput:string;


  constructor(public dialog:MatDialog) { }

  
  ngOnInit() {  }
  

  name = new FormControl('');
  password = new FormControl('');
  ReType= new FormControl('');

  Submit()
  {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  Update()
  {
    const dialogRef=this.dialog.open(PromptComponent,
      {
        width:'250px',
        data:{name:this.dialogName,input:this.dialogInput}
      });

      dialogRef.afterClosed().subscribe(result=>{
        this.dialogInput=result;
      })
    
  }
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



