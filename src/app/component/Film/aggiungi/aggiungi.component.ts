import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/films.service';
import { Film } from '../../../model/film.model';
import { Interprete } from '../../../model/interprete.model';
import { InterpretiService } from '../../../services/interpreti.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  films: Film[] = [];
  interpreti: Interprete[] = [];
  aggiungiForm: FormGroup;
  lastOperationResult: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private interpretiService: InterpretiService
  ) {
    this.aggiungiForm = this.formBuilder.group({
      idFilm: [''],
      idInterprete: [''],
      operazione: ['aggiungi']
    });
  }

  ngOnInit(): void {
    this.loadFilms();
    this.loadInterpreters();
  }

  loadFilms(): void {
    this.filmService.getFilmTitles().subscribe(
      (response: Film[]) => {
        this.films = response;
      },
      error => {
        console.error('Errore nel recupero dei film:', error);
      }
    );
  }

  loadInterpreters(): void {
    this.interpretiService.getInterpreti().subscribe(
      (response: Interprete[]) => {
        this.interpreti = response;
      },
      (error: any) => {
        console.error('Errore nel recupero degli interpreti:', error);
      }
    );
  }

  aggiungiAttoreFilm(): void {
    if (this.aggiungiForm.invalid) {
      console.error('Form non valido');
      return;
    }

    // Ottieni l'ID del film selezionato
    const selectedFilmId = this.aggiungiForm.get('idFilm')?.value;
    if (!selectedFilmId) {
      console.error('ID del film mancante');
      return;
    }

    // Ottieni l'ID dell'interprete selezionato
    const selectedInterpreteId = this.aggiungiForm.get('idInterprete')?.value;
    if (!selectedInterpreteId) {
      console.error('ID dell\'interprete mancante');
      return;
    }

    const operazione = this.aggiungiForm.get('operazione')?.value;

    if (operazione === 'aggiungi') {
      this.filmService.addActorToFilm(selectedFilmId, selectedInterpreteId).subscribe(
        response => {
          const selectedFilmTitle = this.films.find(film => film.idFilm === selectedFilmId)?.titolo;
          const selectedInterpreteName = this.interpreti.find(interprete => interprete.idInterprete === selectedInterpreteId)?.nome;
          this.lastOperationResult = `L'interprete  è stato aggiunto al film con successo!`;
          console.log(this.lastOperationResult);
        },
        error => {
          console.error('Errore durante l\'aggiunta dell\'interprete al film:', error);
        }
      );
    } else if (operazione === 'rimuovi') {
      this.filmService.removeActorFromFilm(selectedFilmId, selectedInterpreteId).subscribe(
        response => {
          const selectedFilmTitle = this.films.find(film => film.idFilm === selectedFilmId)?.titolo;
          const selectedInterpreteName = this.interpreti.find(interprete => interprete.idInterprete === selectedInterpreteId)?.nome;
          this.lastOperationResult = `L'interprete è stato rimosso dal film con successo`;
          console.log(this.lastOperationResult);
        },
        error => {
          console.error('Errore durante la rimozione dell\'interprete dal film:', error);
        }
      );
    }
  }

}


