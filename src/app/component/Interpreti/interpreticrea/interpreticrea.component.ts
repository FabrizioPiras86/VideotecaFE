import { Component, OnInit } from '@angular/core';
import { Interprete } from '../../../model/interprete.model';
import { InterpretiService } from '../../../services/interpreti.service';

@Component({
  selector: 'app-interpreticrea',
  templateUrl: './interpreticrea.component.html',
  styleUrls: ['./interpreticrea.component.css']
})
export class InterpreticreaComponent implements OnInit {
  nome: string = '';
  cognome: string = '';
  interpreteCreato: Interprete | undefined;

  constructor(private interpretiService: InterpretiService) { }

  ngOnInit(): void {
  }

  createInterprete() {
    console.log('Nome dell\'interprete:', this.nome);
    console.log('Cognome dell\'interprete:', this.cognome);
    if (this.nome.trim() !== '' && this.cognome.trim() !== '') {
      this.interpretiService.aggiungiInterprete(this.nome, this.cognome).subscribe({
        next: (response: Interprete) => {
          console.log('Interprete creato con successo:', response);
          this.interpreteCreato = response;
        },
        error: (error) => {
          console.error('Errore durante la creazione dell\'interprete:', error);
        }
      });
    } else {
      console.error('Inserire un nome e un cognome validi.');
    }
  }
}
