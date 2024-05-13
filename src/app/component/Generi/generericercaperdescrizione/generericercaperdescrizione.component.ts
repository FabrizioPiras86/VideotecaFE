import { Component, OnInit } from '@angular/core';
import { GeneriService } from '../../../services/generi-service.service';
import { Genere } from '../../../model/genere.model';

@Component({
  selector: 'app-generiricercaperdescrizione',
  templateUrl: './generericercaperdescrizione.component.html',
  styleUrls: ['./generericercaperdescrizione.component.css']
})
export class GeneriricercaperdescrizioneComponent implements OnInit {
  descrizione: string | undefined;
  generi?: Genere[];

  constructor(private generiService: GeneriService) { }

  ngOnInit(): void {
  }

  cercaPerDescrizione() {
    if (this.descrizione && this.descrizione.length >= 3) {
      this.generiService.getGenereByDescrizione(this.descrizione).subscribe(
        (response: Genere[]) => {
          this.generi = response;
        },
        (error) => {
          console.error("Errore durante la ricerca del genere per descrizione:", error);
        }
      );
    } else {
      console.error("Inserire una descrizione valida (almeno 3 caratteri).");
    }
  }
}
