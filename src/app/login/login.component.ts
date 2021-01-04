import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectedUser: any = {};
  loginForm:FormGroup;
    constructor(private x:FormBuilder,private userService:UserService,private router:Router) { }
  
    ngOnInit(): void {
      this.loginForm=this.x.group({
        email:[''],
        pwd:[''],
      })
    }
    loginUser() {
      this.userService.login(this.connectedUser).subscribe(
        (data) => {
          if (data.message === '2') {         
            localStorage.setItem('connectedUser', JSON.stringify(data.user));
            if (data.user.role === 'admin') {
             
              this.router.navigate(['admin']);
              
            } else  if (data.user.role === 'user') {
             
              this.router.navigate(['']);
              
            }
          }
        }
      )
    }
}
