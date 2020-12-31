import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-menu-child-desert-choise',
  templateUrl: './our-menu-child-desert-choise.component.html',
  styleUrls: ['./our-menu-child-desert-choise.component.css']
})
export class OurMenuChildDesertChoiseComponent implements OnInit {
@Input() x:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToReservation(id:any){
this.router.navigate([`reservation/${id}`]);
  }

}
