import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesertChoiseService {

  desertChoiseUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getallDesertChoise(category: any) {
    return this.httpClient.get<{ choices: any }>(`${this.desertChoiseUrl}/allDesertChoise/${category}`);
  }
  getAllChoicesAdmin() {
    return this.httpClient.get<{ options: any }>(`${this.desertChoiseUrl}/allChoices`);
  }
  addToDesertChoise(choise: any, image: File) {
    console.log('theme in service', choise);

    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData = new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('name', choise.name);
    formData.append('description', choise.description);
    formData.append('category', choise.category);
    formData.append('sousCategory', choise.sousCategory);

    formData.append('image', image);
    return this.httpClient.post(`${this.desertChoiseUrl}/addToDesertChoise`, formData);
  }

  deleteChoice(id: any) {
    return this.httpClient.delete(`${this.desertChoiseUrl}/${id}`);
  }
  getChoiceById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{ choice: any }>(`${this.desertChoiseUrl}/displayChoice/${id}`);
  }

  editChoice(choice: any) {
    return this.httpClient.put(`${this.desertChoiseUrl}/editChoice/${choice._id}`, choice);

  }
  //searchMatch(term:any){
  // return this.httpClient.get<{searchedMatches:any}>(`${this.matchUrl}/api/search/${term}`)
  //}
}
