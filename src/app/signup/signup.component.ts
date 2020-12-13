import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', Validators.maxLength(7)],
      email: [''],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: [''],
      tel: ['']
    } ,
    )
  }

  signUp(obj: any) {
    console.log('This is my user', obj);
    this.userService.addUser(obj).subscribe(
      () => {
        console.log('User added successfully');
        this.router.navigate(['']);
      }
    )
  }

}
