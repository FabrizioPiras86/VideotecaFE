import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../../../services/utenti.service';
import { Utente } from '../../../model/utente.model';

@Component({
  selector: 'app-clientidashboard',
  templateUrl: './clientidashboard.component.html',
  styleUrls: ['./clientidashboard.component.css'],
})
export class ClientidashboardComponent implements OnInit {
  searchType: string = '';
  query: string = '';
  searchResults: any;
  showUpdateForm: boolean = false;

  updatedUser: Utente = {
    username: '',
    nome: '',
    cognome: '',
    ddn: new Date(), 
    email: '',
    autorizzazione: 0,
    idUtente: 0,
    password: '',
  };

  constructor(private utentiService: UtentiService) {}

  ngOnInit(): void {}

  deleteUser(idUtente: number) {
    this.utentiService.deleteUser(idUtente).subscribe(
      (response) => {
        console.log('Utente eliminato con successo', response);
        alert('Operazione riuscita con successo: Utente eliminato.');
        window.location.reload();
      },
      (error) => {
        console.error("Errore durante l'eliminazione dell'utente", error);
        alert('Operazione non riuscita: Errore durante l\'eliminazione dell\'utente.');
      }
    );
  }

  updateUser(utente: Utente) {
    this.utentiService.updateUserAdmin(utente.username!, utente).subscribe(
      (response) => {
        console.log('Dati utente aggiornati con successo', response);
        alert('Operazione riuscita con successo: Dati utente aggiornati.');
        window.location.reload();
      },
      (error) => {
        console.error("Errore durante l'aggiornamento dei dati utente", error);
        alert('Operazione non riuscita: Errore durante l\'aggiornamento dei dati utente.');
      }
    );
  }

  searchUser() {
    if (this.searchType && this.query) {
      switch (this.searchType) {
        case 'nomeUtente':
          this.utentiService.getUserByUsername(this.query).subscribe(
            (results) => (this.searchResults = results),
            (error) =>
              console.error('Errore durante la ricerca per nome utente:', error)
          );
          break;
        case 'firstname':
          this.utentiService.searchUtenteByNome(this.query).subscribe(
            (results) => (this.searchResults = results),
            (error) =>
              console.error('Errore durante la ricerca per nome:', error)
          );
          break;
        case 'surname':
          this.utentiService.searchUtenteByCognome(this.query).subscribe(
            (results) => (this.searchResults = results),
            (error) =>
              console.error('Errore durante la ricerca per cognome:', error)
          );
          break;
        case 'born':
          this.utentiService.searchUtenteByDdn(this.query).subscribe(
            (results) => (this.searchResults = results),
            (error) =>
              console.error(
                'Errore durante la ricerca per anno di nascita:',
                error
              )
          );
          break;
        case 'mail':
          this.utentiService.searchUtenteByEmail(this.query).subscribe(
            (results) =>
              (this.searchResults = Array.isArray(results)
                ? results
                : [results]), 
            (error) =>
              console.error('Errore durante la ricerca per email:', error)
          );
          break;
        default:
          console.error('Tipo di ricerca non valido:', this.searchType);
      }
    } else {
      console.error('Tipo di ricerca o query mancante.');
    }
  }

  showUserUpdateForm(utente: Utente) {
    this.updatedUser = { ...utente };
    this.showUpdateForm = true;
  }

  hideUpdateForm() {
    this.showUpdateForm = false;
  }
}
