import { Component, OnInit } from '@angular/core';
import { InterpretiService } from '../../../services/interpreti.service';
import { Interprete } from '../../../model/interprete.model';

@Component({
  selector: 'app-interpretiricercapernomeocognome',
  templateUrl: './interpretiricercapernomeocognome.component.html',
  styleUrls: ['./interpretiricercapernomeocognome.component.css']
})
export class InterpretiricercapernomeocognomeComponent implements OnInit {
  nomeOCognome: string | undefined;
  interpreti?: Interprete[];

  constructor(private interpretiService: InterpretiService) { }

  ngOnInit(): void {
  }

  cercaPerNomeOCognome() {
    if (this.nomeOCognome && this.nomeOCognome.length >= 3) {
      this.interpretiService.cercaInterpretePerNomeOCognome(this.nomeOCognome).subscribe(
        (response: Interprete[]) => {
          this.interpreti = response;
        },
        (error) => {
          console.error("Errore durante la ricerca dell'interprete per nome o cognome:", error);
        }
      );
    } else {
      console.error("Inserire un nome o cognome valido (almeno 3 caratteri).");
    }
  }
}
