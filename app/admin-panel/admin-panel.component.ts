import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {BottomSheetComponent} from './bottom-sheet/bottom-sheet.component'



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private bottomSheet:MatBottomSheet) { }

  ngOnInit() {
  }

  openSheet()
  {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
