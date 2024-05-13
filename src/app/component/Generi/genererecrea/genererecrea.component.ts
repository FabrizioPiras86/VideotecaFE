import { Component, OnInit } from '@angular/core';
import { GeneriService } from '../../../services/generi-service.service';
import { Genere } from '../../../model/genere.model';

@Component({
  selector: 'app-genererecrea',
  templateUrl: './genererecrea.component.html',
  styleUrls: ['./genererecrea.component.css']
})
export class GenerecreaComponent implements OnInit {
  descrizione: string = '';
  genereCreato: Genere | undefined;

  constructor(private generiService: GeneriService) { }

  ngOnInit(): void {
  }

  createGenere() {
    console.log('Descrizione del genere:', this.descrizione);
    if (this.descrizione.trim() !== '') {
      this.generiService.createGenere(this.descrizione).subscribe({
        next: (response: Genere) => {
          console.log('Genere creato con successo:', response);
          this.genereCreato=response;
        },
        error: (error) => {
          console.error('Errore durante la creazione del genere:', error);
        }
    });
    } else {
      console.error('Inserire una descrizione valida.');
    }
  }
}
