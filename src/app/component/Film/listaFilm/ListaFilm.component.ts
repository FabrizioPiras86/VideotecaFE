import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/films.service';
import { Film } from '../../../model/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './ListaFilm.component.html',
  styleUrls: ['./ListaFilm.component.css']
})
export class ListaFilmComponent implements OnInit {
  films: Film[] = [];
  p: number = 1; 
  pageSize: number = 10; 

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getCompleteFilmList().subscribe((films: Film[]) => {
      this.films = films;
    });
  }
}


