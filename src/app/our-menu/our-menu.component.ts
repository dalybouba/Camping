import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-our-menu',
  templateUrl: './our-menu.component.html',
  styleUrls: ['./our-menu.component.css']
})
export class OurMenuComponent implements OnInit {
menues:any;
category:any;
sousCategory:string;
location:any;

places:any = [];
stores:any = [];
resto:any = [];



  constructor(private menuService:MenuService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.sousCategory = this.activatedRoute.snapshot.paramMap.get('sousCategory');
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
    console.log('this.category',this.category);
    console.log('this.category',this.sousCategory);
    this.menuService.getallHistoryMenu(this.category,this.sousCategory,this.location).subscribe(
      data=>{
        this.menues=data.menueshistory;
      }
    );
    this.menuService.getallMenu(this.category, this.sousCategory).subscribe(
      data => {
        console.log('data', data.menues);
        
        this.menues = data.menues;

        for (let i = 0; i < this.menues.length; i++) {
          if (this.menues[i].type === 'resto')   {
            this.resto.push(this.menues[i]);
            console.log('resto', this.resto);
            
          } else 
          if (this.menues[i].type === 'place')   {
           this.places.push(this.menues[i]);
           console.log('here my ',this.places);
           
          }  else {
            this.stores.push(this.menues[i]);
            console.log('here my ',this.stores);
            

          }     
        }

      }
    );

    
    
  }

}
