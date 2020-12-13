import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-choise-desert',
  templateUrl: './our-choise-desert.component.html',
  styleUrls: ['./our-choise-desert.component.css']
})
export class OurChoiseDesertComponent implements OnInit {
@Input() x:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToMenu(category:any,sousCategory:any){
    this.router.navigate([`our-menu/${category}/${sousCategory}`]);
  }
}
