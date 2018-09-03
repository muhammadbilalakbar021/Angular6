import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private bottomSheetref:MatBottomSheetRef<BottomSheetComponent>) { }

  openBSheet(event:MouseEvent):void
  {
    this.bottomSheetref.dismiss();
    event.preventDefault();
  }


  ngOnInit() {
  }

}
