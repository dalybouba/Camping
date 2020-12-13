import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {
id:any;
theme:any={};
themeForm:FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private themeService:ThemeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //on va faire appelle pour le service pour quil nous envoie notre objet identifier par notre id 
    this.themeService.getThemeById(this.id).subscribe(
      data => {
        this.theme = data.theme;
      }
    )
    this.themeForm = this.formBuilder.group({
      themeName: [''],
      discription: [''],
      category: [''],
      image: ['']
    })
  }
  editTheme() {
    this.themeService.editTheme(this.theme).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
