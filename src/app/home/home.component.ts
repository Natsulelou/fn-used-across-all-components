import { Component, OnInit } from '@angular/core';
import { ManageData, STATE } from '../manage/manage-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stateData: STATE; // ประกาศ type ให้ stateData // undefined
  stateDataWithData: STATE = STATE.Draft; // "draft"
  constructor() { }

  ngOnInit() {
    ManageData.onTestConnect('hello world');
    console.log(STATE);
  }

}
