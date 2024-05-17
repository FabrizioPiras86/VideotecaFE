import { HttpClient } from '@angular/common/http';
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

  registerUser(utenteregistrazione: Utenteregistrazione): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/test`, utenteregistrazione);
  }

  login(utente: Utente): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, utente);
  }

  searchUtenteByNome(nome: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaNome?nome=${nome}`);
  }

  searchUtenteByCognome(cognome: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaCognome?cognome=${cognome}`);
  }

  searchUtenteByDdn(ddn: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaDdn?ddn=${ddn}`);
  }

  searchUtenteByEmail(email: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.baseUrl}/cercaEmail?email=${email}`);
  }

  // Metodo che riunisce le chiamate ai vari endpoint di ricerca
  searchUtente(searchParams: { nome?: string, cognome?: string, ddn?: string, email?: string }): Observable<Utente> {
    const { nome, cognome, ddn, email } = searchParams;
    let url = `${this.baseUrl}/cerca?`;

    if (nome) url += `nome=${nome}&`;
    if (cognome) url += `cognome=${cognome}&`;
    if (ddn) url += `ddn=${ddn}&`;
    if (email) url += `email=${email}&`;

    // Rimuovi l'ultimo carattere (&) dall'URL
    url = url.slice(0, -1);

    return this.http.get<Utente>(url);
  }

  updateUser(userId: number, updatedUserData: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.baseUrl}/${userId}/update`, updatedUserData);
  }
}
