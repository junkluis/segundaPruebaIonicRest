import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get('http://localhost:8000/bucketlists/');
  }

  obtenerCurso(id){
  	return this.http.get('http://localhost:8000/bucketlists/'+id);
  }

}
