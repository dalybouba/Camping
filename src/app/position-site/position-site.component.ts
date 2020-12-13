import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionSiteService } from '../service/position-site.service';

@Component({
  selector: 'app-position-site',
  templateUrl: './position-site.component.html',
  styleUrls: ['./position-site.component.css']
})
export class PositionSiteComponent implements OnInit {

  position: any;
 
  constructor(
    private positionSiteService: PositionSiteService
    ) { }

  ngOnInit(): void {

    
    this.positionSiteService.getallPosition().subscribe(
      data => {
        console.log('this.position',this.position)
        this.position = data.positions;
      }
    );
  }

}
