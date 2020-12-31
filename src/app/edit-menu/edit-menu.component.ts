import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  id:any;
  menu:any={};
  menuForm:FormGroup;
    constructor(
      private activatedRoute:ActivatedRoute,
      private formBuilder:FormBuilder,
      private menuService:MenuService,
      private router:Router
    ) { }
  
    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      //on va faire appelle pour le service pour quil nous envoie notre objet identifier par notre id 
      this.menuService.getMenuById(this.id).subscribe(
        data => {
          this.menu = data.Menu;
        }
      )
      this.menuForm = this.formBuilder.group({
        titre: [''],
        type: [''],
        description: [''],
        image: [''],
        location: [''],
        category: [''],
        sousCategory: ['']
     
      })
    }
    editMenu() {
      this.menuService.editMenu(this.menu).subscribe(
        () => {
          this.router.navigate(['admin']);
        }
      )
    }
}
