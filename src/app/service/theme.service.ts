import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  //themeUrl='api/theme';
  themeUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getallTheme() {
    return this.httpClient.get<{ message: string, themes: any }>(`${this.themeUrl}/allThemes`);
  }
  addTheme(theme: any, image: File) {
    console.log('theme in service', theme);

    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData = new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('themeName', theme.themeName);
    formData.append('discription', theme.discription);
    formData.append('category', theme.category);

    formData.append('image', image);
    return this.httpClient.post(`${this.themeUrl}/addTheme`, formData);
  }
  deleteTheme(id: string) {
    return this.httpClient.delete(`${this.themeUrl}/deleteTheme/${id}`);
  }
  getThemeById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{ theme: any }>(`${this.themeUrl}/displaytheme/${id}`);
  }

  editTheme(theme: any) {
    return this.httpClient.put(`${this.themeUrl}/editTheme/${theme._id}`, theme);

  }
  searchMatch(term: any) {
    return this.httpClient.get<{ searchedTheme: any }>(`${this.themeUrl}/api/search/${term}`)
  }


}
