import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genere } from '../model/genere.model';

@Injectable({
  providedIn: 'root'
})
export class GeneriService {
  private baseUrl = 'http://localhost:8080/api/generi';

  constructor(private http: HttpClient) { }

  getNumeroTotaleGeneri(): Observable<any> {
    return this.http.get(`${this.baseUrl}/numeroTotaleGeneri`);
  }

  getGenereById(id: number): Observable<Genere> {
    return this.http.get<Genere>(`${this.baseUrl}/genere/${id}`);
  }

  getGenereByDescrizione(descrizione: string): Observable<Genere[]> {
    return this.http.get<Genere[]>(`${this.baseUrl}/descrizione?descrizione=${descrizione}`);
  }

  getGeneri(): Observable<Genere[]> {
    return this.http.get<Genere[]>(`${this.baseUrl}/listaGeneri`);
  }

  createGenere(descrizione: string): Observable<Genere> {
    return this.http.post<Genere>(`${this.baseUrl}/new`, descrizione);
  }

}
