import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Utente } from '../../../model/utente.model';
import { UtentiService } from '../../../services/utenti.service';

@Component({
  selector: 'app-modificapersonale',
  templateUrl: './modificapersonale.component.html',
  styleUrls: ['./modificapersonale.component.css']
})
export class ModificapersonaleComponent implements OnInit {
  utente: Utente = {};
  username: string = '';

  constructor(private utentiService: UtentiService) {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('Utente')!;
    this.loadUserData();
  }


  loadUserData(): void {
    this.utentiService.getUserByUsername(this.username).subscribe((data: Utente) => {
      this.utente = data;
      if (this.utente.ddn) {
        console.log(this.utente.ddn.toDateString())
        this.utente.ddn = new Date(this.utente.ddn);
        this.utente.ddn.setMinutes(this.utente.ddn.getMinutes() - this.utente.ddn.getTimezoneOffset());
      }
      console.log(this.utente);
    }, error => {
      alert('Errore nel caricamento dei dati utente.');
    });
  }


  onSubmit(): void {
    this.utentiService.updateUser(this.username, this.utente).subscribe(response => {
      alert('Dati aggiornati con successo!');
    }, error => {
      alert('Si è verificato un errore durante l\'aggiornamento dei dati.');
    });
  }
}
