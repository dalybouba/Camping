import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DesertChoiseService } from '../service/desert-choise.service';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.css']
})
export class EditOptionComponent implements OnInit {

  id:any;
  choise:any={};
  optionForm:FormGroup;
    constructor(
      private activatedRoute:ActivatedRoute,
      private formBuilder:FormBuilder,
      private desertChoiseService:DesertChoiseService,
      private router:Router
    ) { }
  
    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      //on va faire appelle pour le service pour quil nous envoie notre objet identifier par notre id 
      this.desertChoiseService.getChoiceById(this.id).subscribe(
        data => {
          this.choise = data.choice;
        }
      )
      this.optionForm = this.formBuilder.group({
        name: [''],
        discription: [''],
        category: [''],
        sousCategory: [''],
        image: ['']
      })
    }
    editOption() {
      this.desertChoiseService.editChoice(this.choise).subscribe(
        () => {
          this.router.navigate(['admin']);
        }
      )
    }

}
