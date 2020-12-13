import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-menu-child-desert-choise',
  templateUrl: './our-menu-child-desert-choise.component.html',
  styleUrls: ['./our-menu-child-desert-choise.component.css']
})
export class OurMenuChildDesertChoiseComponent implements OnInit {
@Input() x:any;
  constructor() { }

  ngOnInit(): void {
  }

}
