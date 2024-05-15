import { Component } from '@angular/core';
import { FilmService } from '../../../services/films.service';
import { Film } from '../../../model/film.model';


@Component({
  selector: 'app-modificafilm',
  templateUrl: './modificafilm.component.html',
  styleUrls: ['./modificafilm.component.css']
})
export class ModificafilmComponent {
  id: number | undefined;
  titolo: string | undefined;
  anno: string | undefined;
  filmUpdated: Film | undefined;

  constructor(private filmService: FilmService) { }

  updateFilm(): void {
    if (!this.id || !this.titolo || !this.anno) {
      console.error('ID, titolo e anno devono essere forniti');
      return;
    }

    this.filmService.updateFilm(this.id, this.titolo, this.anno)
      .subscribe(
        (response: Film) => {
          this.filmUpdated = response;
          console.log('Film aggiornato con successo', this.filmUpdated);
          // Esegui altre azioni dopo l'aggiornamento se necessario
        },
        error => {
          console.error('Si è verificato un errore durante l\'aggiornamento del film', error);
          // Gestisci l'errore adeguatamente
        }
      );
  }
}
