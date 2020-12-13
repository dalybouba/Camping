import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-display-theme',
  templateUrl: './display-theme.component.html',
  styleUrls: ['./display-theme.component.css']
})
export class DisplayThemeComponent implements OnInit {
  theme: any = {};
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.themeService.getThemeById(this.id).subscribe(
      data => {
        this.theme = data.theme;
      }

    )
  }

}
