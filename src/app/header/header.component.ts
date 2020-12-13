import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstName:string;
  lastName:string;
  constructor(private router:Router) { }
  ngOnInit() {
    this.firstName = localStorage.getItem('connectedUserFname');
    this.lastName = localStorage.getItem('connectedUserLname');
  }
  goToLogin() {
    this.router.navigate(['login']);
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }

  logout(){
    localStorage.removeItem('connectedUserFname');
    localStorage.removeItem('connectedUserLname');
    location.reload();
  }
}
