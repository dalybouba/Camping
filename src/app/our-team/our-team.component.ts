import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
@Input() x:any;
  constructor() { }

  ngOnInit(): void {
  }

}
