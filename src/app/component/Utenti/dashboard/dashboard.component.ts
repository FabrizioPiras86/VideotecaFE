import { Component } from '@angular/core';
import { UtentiService } from '../../../services/utenti.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private utentiService: UtentiService) {}


  deleteUser(idUtente: number) {
    this.utentiService.deleteUser(idUtente).subscribe(
      response => {
        console.log('Utente eliminato con successo', response);
      },
      error => {
        console.error('Errore durante l\'eliminazione dell\'utente', error);
      }
    );
  }

}
