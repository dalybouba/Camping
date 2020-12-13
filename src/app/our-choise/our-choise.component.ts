import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesertChoiseService } from '../service/desert-choise.service';

@Component({
  selector: 'app-our-choise',
  templateUrl: './our-choise.component.html',
  styleUrls: ['./our-choise.component.css']
})
export class OurChoiseComponent implements OnInit {
  choices: any;
  category: any;
  constructor(
    private desertChoiseService: DesertChoiseService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log('this.category',this.category);
    
    this.desertChoiseService.getallDesertChoise(this.category).subscribe(
      data => {
        console.log('this.choices',this.choices)
        this.choices = data.choices;
      }
    );
  }
}
