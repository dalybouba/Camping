import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  menu:any={};
  id:any;
    constructor(private activatedRoute:ActivatedRoute, private menuService:MenuService) { }
  
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.menuService.getMenuById(this.id).subscribe(
        data =>{
          this.menu=data.menu ;
        }
  
      )
    }

}
