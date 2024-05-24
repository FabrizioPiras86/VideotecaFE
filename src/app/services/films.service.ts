import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/film.model';
import { Interprete } from '../model/interprete.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
<<<<<<< HEAD

=======
>>>>>>> abd7ef8c6cb5a4a166fa82ce5a8a831cad11a170
  private apiUrl = 'http://localhost:8080/api/films';

  constructor(private http: HttpClient) { }

  getNumeroTotaleFilm(): Observable<any> {
    return this.http.get(`${this.apiUrl}/numeroTotaleFilm`);
  }

  getNumeroFilmPerGenere(): Observable<any> {
    return this.http.get(`${this.apiUrl}/numfilmpergenere`);
  }

  getNumeroFilmPerInterprete(): Observable<any> {
    return this.http.get(`${this.apiUrl}/numfilmperinterprete`);
  }

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

  getActors(): Observable<Interprete[]> {
    return this.http.get<Interprete[]>(`${this.apiUrl}/listaInterpreti`);
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
    return this.http.post(`${this.apiUrl}/aggiungiattorefilm?id_film=${idFilm}&id_interprete=${idInterprete}`, {});
  }

  removeActorFromFilm(idFilm: number, idInterprete: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/rimuoviattorefilm?idFilm=${idFilm}&idInterprete=${idInterprete}`, {});
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

