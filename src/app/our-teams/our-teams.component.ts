import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.css']
})
export class OurTeamsComponent implements OnInit {
team:any;
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getallTeam().subscribe(
      data=>{
        this.team=data.teams;
      }
    );
  }

}
