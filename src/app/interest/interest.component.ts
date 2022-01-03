import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  app_script:string = "assets/image/App_Script.png";
  physics:string = "assets/image/Physics.png";
  python:string = "assets/image/Python.png";
  ccpp:string = "assets/image/CCPP.png";
  front:string = "assets/image/Front.png";
}
