import { Component, OnInit } from '@angular/core';
import { GeneriService } from '../../../services/generi-service.service';
import { Genere } from '../../../model/genere.model';


@Component({
  selector: 'app-generericercaperid',
  templateUrl: './generericercaperid.component.html',
  styleUrls: ['./generericercaperid.component.css']
})
export class GenerericercaperidComponent implements OnInit {
  genereId: number | undefined;
  genere?: Genere;

  constructor(private generiService: GeneriService) { }

  ngOnInit(): void {
  }

  cercaGenere() {
    if (this.genereId) {
      this.generiService.getGenereById(this.genereId).subscribe(
        (response: Genere) => {
          this.genere = response;
        },
        (error) => {
          console.error("Errore durante la ricerca del genere:", error);
        }
      );
    } else {
      console.error("Inserire un ID valido.");
    }
  }
}
