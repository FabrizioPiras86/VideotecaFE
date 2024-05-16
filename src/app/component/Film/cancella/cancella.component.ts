import { Component, OnInit } from '@angular/core';
import { Film } from '../../../model/film.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmService } from '../../../services/films.service';

@Component({
  selector: 'app-cancella',
  templateUrl: './cancella.component.html',
  styleUrls: ['./cancella.component.css']
})
export class CancellaComponent implements OnInit {
  films: Film[] = [];
  cancellaForm: FormGroup;
  lastOperationResult: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService
  ) {
    this.cancellaForm = this.formBuilder.group({
      idFilm: ['']
    });
  }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getCompleteFilmList().subscribe(
      (response: Film[]) => {
        this.films = response;
      },
      error => {
        console.error('Errore nel recupero dei film:', error);
      }
    );
  }

  cancellaFilm(): void {
    const selectedFilmId = this.cancellaForm.get('idFilm')?.value;

    if (!selectedFilmId) {
      console.error('ID del film mancante');
      return;
    }

    this.filmService.deleteFilm(selectedFilmId).subscribe(
      response => {
        this.lastOperationResult = `Film eliminato con successo!`;
        console.log(this.lastOperationResult);
      },
      error => {
        console.error('Errore durante l\'eliminazione del film:', error);
      }
    );
  }
}
