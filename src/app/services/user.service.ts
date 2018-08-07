import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Changement de Http vers HttpClient
import 'rxjs/add/operator/map'; // Installation du package rxjs-compat => npm install --save rxjs-compat

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    // Appel http get pour récupérer les data depuis le 'data/users.json'
    // Utiliser le <any> pour pouvoir supprimer les .json()
    return this.httpClient.get<any>('data/users.json')
             .map(response => response);
  }

}
