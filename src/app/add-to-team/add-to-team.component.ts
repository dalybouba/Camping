import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-add-to-team',
  templateUrl: './add-to-team.component.html',
  styleUrls: ['./add-to-team.component.css']
})
export class AddToTeamComponent implements OnInit {

  team: any = {};
  teamForm: FormGroup;
  imagePreview: any;

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      lienFb:['']
    
    })
  }
  addToTeam() {
    this.teamService.addtoTeam(this.team, this.teamForm.value.image).subscribe(
      () => {
        console.log('option added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.teamForm.patchValue({ image: file });
    this.teamForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
