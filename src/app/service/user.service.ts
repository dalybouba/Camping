import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allUsers`);
  }
  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userUrl}/deleteUser/${id}`);
  }

  addUser(user: any) {
    console.log('user in service', user);

    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData = new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('pwd', user.pwd);
    formData.append('tel', user.tel);
    //  formData.append('image',image);
    return this.httpClient.post(`${this.userUrl}/addUser`, user);
  }
  //id: string parce que notre id est identifier automatiquement
  getUserById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/displayUser/${id}`);
  }

  editUser(user: any) {
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`, user);

  }

  login(user: any) {
    return this.httpClient.post<{ user: any }>(`${this.userUrl}/login`, user);
  }
}
