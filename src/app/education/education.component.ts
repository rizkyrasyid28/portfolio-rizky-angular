import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SMA:string = "assets/image/SMA.png";
  SMP:string = "assets/image/SMP.png";
  UNIV:string = "assets/image/UNIV.png";
}
