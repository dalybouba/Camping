import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  actualDate: Date;
  connectedUser:any;
  menu:any={};
  id:any;
    constructor(private activatedRoute:ActivatedRoute, private menuService:MenuService) { }
  
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.menuService.getMenuById(this.id).subscribe(
        data =>{
          this.menu=data.Menu ;
        }
  
      );
      this.actualDate = new Date();
      this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
      console.log('connected user', this.connectedUser);
    }

}
