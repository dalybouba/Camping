import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesertChoiseService } from '../service/desert-choise.service';

@Component({
  selector: 'app-display-option',
  templateUrl: './display-option.component.html',
  styleUrls: ['./display-option.component.css']
})
export class DisplayOptionComponent implements OnInit {

  option:any={};
  id:any;
    constructor(private activatedRoute:ActivatedRoute, private desertChoiceService:DesertChoiseService) { }
  
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.desertChoiceService.getChoiceById(this.id).subscribe(
        data =>{
          this.option=data.choice ;
        }
  
      )
    }

}
