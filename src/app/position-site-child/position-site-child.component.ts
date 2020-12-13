import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-site-child',
  templateUrl: './position-site-child.component.html',
  styleUrls: ['./position-site-child.component.css']
})
export class PositionSiteChildComponent implements OnInit {

  @Input() x:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToHistoryMenu(category:any,sousCategory:any,location:any){
    this.router.navigate([`our-menu/${category}/${sousCategory}/${location}`]);
  }
}
