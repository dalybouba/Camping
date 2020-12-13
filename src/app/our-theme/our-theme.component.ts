import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-our-theme',
  templateUrl: './our-theme.component.html',
  styleUrls: ['./our-theme.component.css']
})
export class OurThemeComponent implements OnInit {
themes:any;
  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
this.themeService.getallTheme().subscribe(
  data=>{
    this.themes=data.themes ;
  }
)
  }

}
