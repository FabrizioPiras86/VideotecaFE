import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/films.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchType: string = '';
  query: string = '';
  searchResults: any[] = [];
  result: any;


  constructor(private filmService: FilmService) { }
  ngOnInit(): void {

  }

  searchFilms() {
    if (this.searchType && this.query) {
      switch (this.searchType) {
        case 'title':
          this.filmService.searchFilmByTitle(this.query).subscribe(
            (results) => {
              this.searchResults = results;
            },
            (error) => {
              console.error('Errore durante la ricerca per titolo:', error);
            }
          );
          break;
        case 'year':
          this.filmService.getFilmByYear(this.query).subscribe(
            (results) => {
              this.searchResults = results;
            },
            (error) => {
              console.error('Errore durante la ricerca per anno:', error);
            }
          );
          break;
        case 'genre':
          this.filmService.getFilmByGenre(this.query).subscribe(
            (results) => {
              this.searchResults = results;
            },
            (error) => {
              console.error('Errore durante la ricerca per genere:', error);
            }
          );
          break;
        case 'actor':
          this.filmService.getFilmByActor(this.query).subscribe(
            (results) => {
              this.searchResults = results;
            },
            (error) => {
              console.error('Errore durante la ricerca per interprete:', error);
            }
          );
          break;
        default:
          console.error('Tipo di ricerca non valido:', this.searchType);
      }
    } else {
      console.error('Tipo di ricerca o query mancante.');
    }
  }
}
