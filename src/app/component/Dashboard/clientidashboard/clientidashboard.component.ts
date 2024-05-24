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

  // Dichiarazione della proprietà updatedUser
  updatedUser: Utente = {
    username: '',
    nome: '',
    cognome: '',
    ddn: new Date(), // Inizializzazione con una nuova data
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
        // Aggiungi un alert per l'eliminazione riuscita
        alert('Operazione riuscita con successo: Utente eliminato.');
        // Aggiorna i risultati della ricerca
        window.location.reload();
      },
      (error) => {
        console.error("Errore durante l'eliminazione dell'utente", error);
        // Aggiungi un alert per l'eliminazione non riuscita
        alert('Operazione non riuscita: Errore durante l\'eliminazione dell\'utente.');
      }
    );
  }

  updateUser(utente: Utente) {
    this.utentiService.updateUserAdmin(utente.username!, utente).subscribe(
      (response) => {
        console.log('Dati utente aggiornati con successo', response);
        // Aggiungi un alert per l'aggiornamento riuscito
        alert('Operazione riuscita con successo: Dati utente aggiornati.');
        // Nascondi il form di aggiornamento
        window.location.reload();
      },
      (error) => {
        console.error("Errore durante l'aggiornamento dei dati utente", error);
        // Aggiungi un alert per l'aggiornamento non riuscito
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
                : [results]), // Ensure array
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

  // Funzione per visualizzare il form di aggiornamento utente
  showUserUpdateForm(utente: Utente) {
    this.updatedUser = { ...utente };
    this.showUpdateForm = true;
  }

  // Funzione per nascondere il form di aggiornamento utente
  hideUpdateForm() {
    this.showUpdateForm = false;
  }
}
