import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl='http://localhost:3000'
  constructor( private httpClient: HttpClient )  { }
  getallMenu (category:string,sousCategory:string)
  {
    return this.httpClient.get<{message:string,menues:any}>(`${this.menuUrl}/allMenu/${category}/${sousCategory}`);
  }
  getallHistoryMenu (category:string,sousCategory:string,location:string)
  {
    return this.httpClient.get<{message:string,menueshistory:any}>(`${this.menuUrl}/allMenu/${category}/${sousCategory}/${location}`);
  }
  getallMenuAdmin ()
  {
    return this.httpClient.get<{message:string,menu:any}>(`${this.menuUrl}/allMenuAdmin`);
  }
  addToMenu(menu: any,image:File) {
    console.log('theme in service' , menu);
    
    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData=new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('titre',menu.titre);
    formData.append('type',menu.type);
    formData.append('location',menu.location);
    formData.append('discription',menu.discription);
    formData.append('category',menu.category);
    formData.append('sousCategory',menu.sousCategory);
    formData.append('image',image);
    return this.httpClient.post(`${this.menuUrl}/addToMenu`, formData);
  }
  deleteMenu(id: string) {
    return this.httpClient.delete(`${this.menuUrl}/deleteMenu/${id}`);
  }

getMenuById(id: string) {
  // /displayMatch/   l'adresse
  //<{match:any}> c'est le retour de back end  
  return this.httpClient.get<{ Menu: any }>(`${this.menuUrl}/displayMenu/${id}`);
}

editMenu(menu: any) {
  return this.httpClient.put(`${this.menuUrl}/editChoice/${menu._id}`, menu);

}
searchMenu(term: any) {
  console.log('term in service', term);
  console.log('`${this.menuUrl}/api/search/${term}`', `${this.menuUrl}/api/search/${term}`);
  
  return this.httpClient.get<{ searchedMenu: any }>(`${this.menuUrl}/api/search/${term}`)
}
}
