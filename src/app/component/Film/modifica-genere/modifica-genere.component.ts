import { Component, OnInit } from '@angular/core';
import { Film } from '../../../model/film.model';
import { Genere } from '../../../model/genere.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/films.service';
import { GeneriService } from '../../../services/generi-service.service';


@Component({
  selector: 'app-modifica-genere',
  templateUrl: './modifica-genere.component.html',
  styleUrls: ['./modifica-genere.component.css']
})
export class ModificaGenereComponent implements OnInit {
  films: Film[] = [];
  generes: Genere[] = [];
  modificaGenereForm: FormGroup;
  lastOperationResult: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private genereservice: GeneriService,
  ) {
    this.modificaGenereForm = this.formBuilder.group({
      idFilm: ['', Validators.required],
      idGenere: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadFilms();
    this.loadGenres();
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

  loadGenres(): void {
    this.genereservice.getGeneri().subscribe(
      (response: Genere[]) => {
        this.generes = response;
      },
      (error: any) => {
        console.error('Errore nel recupero dei generi:', error);
      }
    );
  }

  modificaGenere(): void {
    if (this.modificaGenereForm.invalid) {
      console.error('Form non valido');
      return;
    }

    const selectedFilmId = this.modificaGenereForm.get('idFilm')?.value;
    const selectedGenreId = this.modificaGenereForm.get('idGenere')?.value;

    this.filmService.updateFilmGenre(selectedFilmId, selectedGenreId).subscribe(
      response => {
        this.lastOperationResult = `Genere del film aggiornato con successo!`;
        console.log(this.lastOperationResult);
      },
      error => {
        console.error('Errore durante l\'aggiornamento del genere del film:', error);
      }
    );
  }
}
