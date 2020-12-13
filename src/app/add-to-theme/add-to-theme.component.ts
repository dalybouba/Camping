import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-add-to-theme',
  templateUrl: './add-to-theme.component.html',
  styleUrls: ['./add-to-theme.component.css']
})
export class AddToThemeComponent implements OnInit {
  theme: any = {};
  themeForm: FormGroup;
  imagePreview: any;
  constructor(
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.themeForm = this.formBuilder.group({
      themeName: [''],
      discription: [''],
      category: [''],
      image: ['']

    })
  }
  addTheme() {
    this.themeService.addTheme(this.theme, this.themeForm.value.image).subscribe(
      () => {
        console.log('Theme added successfuly');
        this.router.navigate(['admin']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.themeForm.patchValue({ image: file });
    this.themeForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
