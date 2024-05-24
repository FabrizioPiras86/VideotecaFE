import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Utente } from '../model/utente.model';
import { Utenteregistrazione } from '../model/utenteregistrazione.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  private baseUrl =  'http://localhost:8080/api/utente';

  constructor(private http: HttpClient) { }

  getNumeroTotaleUtenti(): Observable<any> {
    return this.http.get(`${this.baseUrl}/numeroTotaleMembri`);
  }

  getUserByUsername(username: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaUsername?username=${username}`);
  }

  deleteUser(idUtente: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${idUtente}`);
  }

  searchUtente(type: string, query: string): Observable<Utente[]> {
    let endpoint = '';
    let params = new HttpParams();

    switch (type) {
      case 'nomeUtente':
        endpoint = 'cercaUsername';
        params = params.set('username', query);
        break;
      case 'firstname':
        endpoint = 'cercaNome';
        params = params.set('nome', query);
        break;
      case 'surname':
        endpoint = 'cercaCognome';
        params = params.set('cognome', query);
        break;
      case 'born':
        endpoint = 'cercaDdn';
        params = params.set('ddn', query);
        break;
      case 'mail':
        endpoint = 'cercaEmail';
        params = params.set('email', query);
        break;
      default:
        throw new Error('Invalid search type');
    }

    return this.http.get<Utente[]>(`${this.baseUrl}/${endpoint}`, { params });
  }


  searchUtenteByNome(nome: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaNome?nome=${nome}`);
  }

  searchUtenteByCognome(cognome: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaCognome?cognome=${cognome}`);
  }

  searchUtenteByDdn(year: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.baseUrl}/cercaDdn?year=${year}`);
  }

  searchUtenteByEmail(email: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.baseUrl}/cercaEmail?email=${email}`);
  }

  updateUser(username: string, utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.baseUrl}/${username}/update`, utente);
  }

  updateUserAdmin(username: string, utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.baseUrl}/${username}/updateAdmin`, utente);
  }

  registerUser(utenteregistrazione: Utenteregistrazione): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, utenteregistrazione);
  }

  login(utenteregistrazione: Utenteregistrazione): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, utenteregistrazione);
  }

}
