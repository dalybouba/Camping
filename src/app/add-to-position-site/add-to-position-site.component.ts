import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PositionSiteComponent } from '../position-site/position-site.component';
import { PositionSiteService } from '../service/position-site.service';

@Component({
  selector: 'app-add-to-position-site',
  templateUrl: './add-to-position-site.component.html',
  styleUrls: ['./add-to-position-site.component.css']
})
export class AddToPositionSiteComponent implements OnInit {

  position: any = {};
  positionForm: FormGroup;
  imagePreview: any;

  constructor(
    private formBuilder: FormBuilder,
    private positionSiteService: PositionSiteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.positionForm = this.formBuilder.group({
      name: [''],
      location: [''],
      description: [''],
      image: [''],
      category: [''],
      sousCategory: ['']

    })
  }
  addToPosition() {
    this.positionSiteService.addToPosition(this.position, this.positionForm.value.image).subscribe(
      () => {
        console.log('option added successfully');
        this.router.navigate(['']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.positionForm.patchValue({ image: file });
    this.positionForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
