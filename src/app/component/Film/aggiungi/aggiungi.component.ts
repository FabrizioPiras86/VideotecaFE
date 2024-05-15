import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../services/films.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  findResult: any[] = [];
  aggiungiForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private filmService: FilmService) {
    this.aggiungiForm = this.formBuilder.group({
      idFilm: ['', Validators.required],
      idInterprete: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.aggiungiForm = this.formBuilder.group({
      idFilm: ['', Validators.required],
      idInterprete: ['', Validators.required]
    });
  }

  aggiungiAttoreFilm(): void {
    if (this.aggiungiForm.invalid) {
      console.error('Form non valido');
      return;
    }

    const idFilm = this.aggiungiForm.get('idFilm')?.value;
    const idInterprete = this.aggiungiForm.get('idInterprete')?.value;

    this.filmService.addActorToFilm(idFilm, idInterprete)
      .subscribe(
        response => {
          console.log('Attore aggiunto al film con successo:', response);
        },
        error => {
          console.error('Errore durante l\'aggiunta dell\'attore al film:', error);
        }
      );
  }

  rimuoviAttoreFilm(): void {
    if (this.aggiungiForm.invalid) {
      console.error('Form non valido');
      return;
    }

    const idFilm = this.aggiungiForm.get('idFilm')?.value;
    const idInterprete = this.aggiungiForm.get('idInterprete')?.value;

    this.filmService.removeActorFromFilm(idFilm, idInterprete)
      .subscribe(
        response => {
          console.log('Attore rimosso dal film con successo:', response);
        },
        error => {
          console.error('Errore durante la rimozione dell\'attore dal film:', error);
        }
      );
  }
}
