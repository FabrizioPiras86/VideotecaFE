import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:8080/api/films';

  constructor(private http: HttpClient) { }

  getFilmTitles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/titles`);
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  searchFilmByTitle(titolo: string): Observable<any> {
    const params = new HttpParams().set('titolo', titolo);
    return this.http.get(`${this.apiUrl}/search`, { params });
  }

  getFilmByYear(anno: string): Observable<any> {
    const params = new HttpParams().set('anno', anno);
    return this.http.get(`${this.apiUrl}/anno`, { params });
  }

  getFilmByGenre(genere: string): Observable<any> {
    const params = new HttpParams().set('genere', genere);
    return this.http.get(`${this.apiUrl}/genere`, { params });
  }

  getFilmByActor(filter: string): Observable<any> {
    const params = new HttpParams().set('filter', filter);
    return this.http.get(`${this.apiUrl}/attori`, { params });
  }

  getCompleteFilmList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/titolocompleto`);
  }

  getCompleteFilmById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/titolocompleto/${id}`);
  }

  addNewFilm(newFilm: Film): Observable<any> {
    const requestBody = {
      titolo: newFilm.titolo,
      anno: newFilm.anno,
      idGenere: newFilm.genere,
      idInterpreti: newFilm.interpreti
    };

    return this.http.post(`${this.apiUrl}/nuovofilm`, requestBody);
  }

  updateFilm(id: number, titolo: string, anno: string): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('titolo', titolo)
      .set('anno', anno);
    return this.http.post(`${this.apiUrl}/modificafilm`, params);
  }

  updateFilmGenre(idFilm: number, idGenere: number): Observable<any> {
    const params = new HttpParams()
      .set('id_film', idFilm.toString())
      .set('id_genere', idGenere.toString());
    return this.http.post(`${this.apiUrl}/updategenerefilm`, params);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deletefilm/${id}`);
  }

  addActorToFilm(idFilm: number, idInterprete: number): Observable<any> {
    const params = new HttpParams()
      .set('id_film', idFilm.toString())
      .set('id_interprete', idInterprete.toString());
    return this.http.post(`${this.apiUrl}/aggiungiattorefilm`, params);
  }

  removeActorFromFilm(idFilm: number, idInterprete: number): Observable<any> {
    const params = { idFilm, idInterprete };
    return this.http.post(`${this.apiUrl}/rimuoviattorefilm`, params);
  }

  searchFilms(type: string, query: string): Observable<any> {
    let endpoint = '';
    let params = new HttpParams();

    switch (type) {
      case 'title':
        endpoint = 'search';
        params = params.set('titolo', query);
        break;
      case 'year':
        endpoint = 'anno';
        params = params.set('anno', query);
        break;
      case 'genre':
        endpoint = 'genere';
        params = params.set('genere', query);
        break;
      case 'actor':
        endpoint = 'attori';
        params = params.set('filter', query);
        break;
      default:

        throw new Error('Invalid search type');
    }

    return this.http.get(`${this.apiUrl}/${endpoint}`, { params });
  }

}