import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-theme-child',
  templateUrl: './our-theme-child.component.html',
  styleUrls: ['./our-theme-child.component.css']
})
export class OurThemeChildComponent implements OnInit {
  @Input() x:any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToChoice(category:any){
    this.router.navigate([`our-choice/${category}`]);
  }
}
