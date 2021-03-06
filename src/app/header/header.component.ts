import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  actualDate: Date;
  connectedUser:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.actualDate = new Date();
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    console.log('connected user', this.connectedUser);
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    console.log('connected user', this.connectedUser);
    
  }
  goToLogin() {
    this.router.navigate(['login']);
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }

  logout(){
    localStorage.removeItem('connectedUser');
    location.reload();
  }
}
