import { Component, OnInit } from '@angular/core';
import { ManageData, STATE } from '../manage/manage-data';
import { NotUsedStatic, NotUsedStaticWithParams } from '../manage/not-used-static';

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
    // Static refer "https://www.tutorialsteacher.com/typescript/typescript-static"

    // use static on function
    ManageData.onTestConnect('hello world');
    console.log(STATE);

    // not use static on function
    let notUsedStaticObj = new NotUsedStatic();
    notUsedStaticObj.onTestConnectNotUsedStatic();

    // not use static with parameter
    let notUsedStaticWithParamsObj = new NotUsedStaticWithParams('hello world', 38);
    notUsedStaticWithParamsObj.getParameter();
  }

}
