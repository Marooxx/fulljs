import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:3000/api/user';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Ajoute l'utilisateur en BDD via l'API REST de Node
   * @param user Utilisateur à stocker en BDD
   */
  public register(user: User): Observable<{result: Boolean}> {
    return this.http.post<{result: Boolean}>(this.apiURL, user, this.httpOptions).pipe(
      tap((data) => console.log('Résultat de l\'inscription : ' + data.result))
    );
  }

  public login(user: User): Observable<{result: Boolean}> {
    return this.http.post<{result: Boolean}>(this.apiURL + '/login', user, this.httpOptions).pipe(
      tap((data) => console.log('Résultat de l\'authentification : ' + data.result))
    );
  }

}
