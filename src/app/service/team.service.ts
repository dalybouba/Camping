import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getallTeam() {
    return this.httpClient.get<{ message: string, teams: any }>(`${this.teamUrl}/allTeams`);
  }
  addtoTeam(team: any, image: File) {
    console.log('theme in service', team);

    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData = new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('name', team.name);
    formData.append('discription', team.discription);
    formData.append('lienFb', team.lienFb);
    

    formData.append('image', image);
    return this.httpClient.post(`${this.teamUrl}/addTeam`, formData);
  }
  deleteTeam(id: string) {
    return this.httpClient.delete(`${this.teamUrl}/deleteTeam/${id}`);
  }
  getTeamById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{ theme: any }>(`${this.teamUrl}/displayTeam/${id}`);
  }

  editTeam(team: any) {
    return this.httpClient.put(`${this.teamUrl}/editTheme/${team._id}`, team);

  }
}
