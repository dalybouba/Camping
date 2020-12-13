import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DesertChoiseService } from '../service/desert-choise.service';

import { MenuService } from '../service/menu.service';
import { TeamService } from '../service/team.service';
import { ThemeService } from '../service/theme.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  theme: any;
  option: any;
  places: any;
  menus: any;
  users: any;
  team: any;
  constructor(
    private themeService: ThemeService,
    private desertChoiseService: DesertChoiseService,
    private userService: UserService,
    private teamService: TeamService,
    private menuService: MenuService,

    private router: Router
  ) { }

  ngOnInit(): void {
    this.themeService.getallTheme().subscribe(
      data => {
        this.theme = data.themes;
      }
    );
    this.teamService.getallTeam().subscribe(
      data => {
        this.team = data.teams;
      }
    )
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data.users;
      }
    );
    this.desertChoiseService.getAllChoicesAdmin().subscribe(
      data => {
        this.option = data.options;
      }
    );

    this.menuService.getallMenuAdmin().subscribe(
      data => {
        this.menus = data.menu;
      }
    );

  }
  deleteTheme(id: string) {
    this.themeService.deleteTheme(id).subscribe(
      () => {
        this.themeService.getallTheme().subscribe(
          data => {
            this.theme = data.themes;
          }
        );
      }
    );
  }
  deleteTeam(id: string) {
    this.teamService.deleteTeam(id).subscribe(
      () => {
        this.teamService.getallTeam().subscribe(
          data => {
            this.theme = data.teams;
          }
        );
      }
    );
  }
  deleteOption(id: string) {
    this.desertChoiseService.deleteChoice(id).subscribe(
      () => {
        this.desertChoiseService.getAllChoicesAdmin().subscribe(
          data => {
            this.option = data.options;
          }
        );
      }
    );
  }
  deleteMenu(id: string) {
    this.menuService.deleteMenu(id).subscribe(
      () => {
        this.menuService.getallMenuAdmin().subscribe(
          data => {
            this.option = data.menu;
          }
        );
      }
    );
  }
  //
  editTheme(id: any) {
    this.router.navigate([`edit-theme/${id}`]);
  }
  editOption(id: any) {
    this.router.navigate([`edit-option/${id}`]);
  }
  editMenu(id: any) {
    this.router.navigate([`edit-menu/${id}`]);
  }
  displayTheme(id: any) {
    this.router.navigate([`display-theme/${id}`]);
  }
  displayOption(id: any) {
    this.router.navigate([`display-option/${id}`]);
  }
  displayMenu(id: any) {
    this.router.navigate([`display-menu/${id}`]);
  }

}
