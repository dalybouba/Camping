import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionSiteService {

  positionUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getallPosition() {
    return this.httpClient.get<{ message: string, positions: any }>(`${this.positionUrl}/allPositions`);
  }
  addToPosition(position: any, image: File) {
    console.log('theme in service', position);

    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData = new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('name', position.name);
    formData.append('discription', position.discription);
    formData.append('category', position.category);
    formData.append('sousCategory', position.sousCategory);

    formData.append('location', position.location);
    formData.append('image', image);
    return this.httpClient.post(`${this.positionUrl}/addToPosition`, formData);
  }
  deletePosition(id: string) {
    return this.httpClient.delete(`${this.positionUrl}/deletePosition/${id}`);
  }
  getPositionById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{ theme: any }>(`${this.positionUrl}/displayPosition/${id}`);
  }

  editTheme(position: any) {
    return this.httpClient.put(`${this.positionUrl}/editPosition/${position._id}`, position);

  }
}
