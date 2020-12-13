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

  login:any={};
  loginForm:FormGroup;
    constructor(private x:FormBuilder,private userService:UserService,private router:Router) { }
  
    ngOnInit(): void {
      this.loginForm=this.x.group({
        email:[''],
        pwd:[''],
      })
    }
    loginUser(){
      console.log('my object',this.login);
      this.userService.login(this.login).subscribe(
        data=>{
          
         if (data) {
           localStorage.setItem('connectedUserFname',data.user[0].firstName);
           localStorage.setItem('connectedUserLname',data.user[0].lastName);
           location.reload();
          
         }
        }
      )
      this.router.navigate(['']);
    }

}
