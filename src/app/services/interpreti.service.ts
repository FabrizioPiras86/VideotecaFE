import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interprete } from '../model/interprete.model';

@Injectable({
  providedIn: 'root'
})
export class InterpretiService {

  private baseUrl = 'http://localhost:8080/api/interpreti';

  constructor(private http: HttpClient) { }

  getNumeroTotaleInterpreti(): Observable<any> {
    return this.http.get(`${this.baseUrl}/numeroTotaleInterpreti`);
  }

  getInterpreti(): Observable<Interprete[]> {
    return this.http.get<Interprete[]>(`${this.baseUrl}/listaInterpreti`);
  }

  getInterpreteById(id: number): Observable<Interprete> {
    return this.http.get<Interprete>(`${this.baseUrl}/interprete/${id}`);
  }

  cercaInterpretePerNomeOCognome(nomeOCognome: string): Observable<Interprete[]> {
    return this.http.get<Interprete[]>(`${this.baseUrl}/nomeOCognome?nomeOCognome=${nomeOCognome}`);
  }

  aggiungiInterprete(nome: string, cognome: string): Observable<Interprete> {
    return this.http.post<Interprete>(`${this.baseUrl}/new`, { nome, cognome });
  }
}
