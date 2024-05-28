import { Component, OnInit } from '@angular/core';
import { Film } from '../../../model/film.model';
import { FilmService } from '../../../services/films.service';
import { GeneriService } from '../../../services/generi-service.service';
import { InterpretiService } from '../../../services/interpreti.service';
import { Genere } from '../../../model/genere.model';
import { Interprete } from '../../../model/interprete.model';

@Component({
  selector: 'app-filmcrea',
  templateUrl: './filmcrea.component.html',
  styleUrls: ['./filmcrea.component.css']
})
export class FilmcreaComponent implements OnInit {
  titolo: string = '';
  anno: string = '';
  genere: string = '';
  interpreti: string = '';
  filmCreato: Film | undefined;
  generi: Genere[] = [];
  interpretiArray: Interprete[] = [];
  paginazioneGeneri: number = 1; 
  paginazioneInterpreti: number = 1; 

  constructor(
    private filmService: FilmService,
    private generiService: GeneriService,
    private interpretiService: InterpretiService
  ) { }

  ngOnInit(): void {
    this.loadGeneri();
    this.loadInterpreti();
  }

  loadGeneri() {
    this.generiService.getGeneri().subscribe({
      next: (generi: Genere[]) => {
        this.generi = generi;
      },
      error: (error) => {
        console.error('Errore durante il recupero dei generi:', error);
      }
    });
  }

  loadInterpreti() {
    this.interpretiService.getInterpreti().subscribe({
      next: (interpreti: Interprete[]) => {
        this.interpretiArray = interpreti;
      },
      error: (error) => {
        console.error('Errore durante il recupero degli interpreti:', error);
      }
    });
  }

  createFilm() {
  const interpretiArray = this.interpreti.split(',').map(interprete => interprete.trim());
  console.log('Titolo del film:', this.titolo);
  console.log('Anno del film:', this.anno);
  console.log('Genere del film:', this.genere);
  console.log('Interpreti del film:', interpretiArray);
  if (this.titolo.trim() !== '' && this.anno.trim() !== '' && this.genere.trim() !== '' && interpretiArray.length > 0) {
    const newFilm: Film = {
      idFilm: 0,
      titolo: this.titolo,
      anno: this.anno,
      genere: this.genere,
      interpreti: interpretiArray
    };
    this.filmService.addNewFilm(newFilm).subscribe({
      next: (response: Film) => {
        console.log('Film creato con successo:', response);
        this.filmCreato = response;
      },
      error: (error) => {
        console.error('Errore durante la creazione del film:', error);
      }
    });
  } else {
    console.error('Inserire titolo, anno, genere e almeno un interprete valido.');
  }
}
}
