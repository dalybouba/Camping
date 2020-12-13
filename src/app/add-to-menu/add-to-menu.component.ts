import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-add-to-menu',
  templateUrl: './add-to-menu.component.html',
  styleUrls: ['./add-to-menu.component.css']
})
export class AddToMenuComponent implements OnInit {
  menu: any = {};
  menuForm: FormGroup;
  imagePreview: any;

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
  addToMenu() {
    this.menuService.addToMenu(this.menu, this.menuForm.value.image).subscribe(
      () => {
        console.log('option added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.menuForm.patchValue({ image: file });
    this.menuForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
