import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DesertChoiseService } from '../service/desert-choise.service';

@Component({
  selector: 'app-add-to-desert',
  templateUrl: './add-to-desert.component.html',
  styleUrls: ['./add-to-desert.component.css']
})
export class AddToDesertComponent implements OnInit {
  choise: any = {};
  optionForm: FormGroup;
  imagePreview: any;

  constructor(
    private formBuilder: FormBuilder,
    private desertChoiseService: DesertChoiseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.optionForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      sousCategory: [''],
      category: ['']
    })
  }
  addToDesert() {
    this.desertChoiseService.addToDesertChoise(this.choise, this.optionForm.value.image).subscribe(
      () => {
        console.log('option added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.optionForm.patchValue({ image: file });
    this.optionForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
