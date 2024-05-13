import { Component, OnInit } from '@angular/core';
import { Interprete } from '../../../model/interprete.model';
import { InterpretiService } from '../../../services/interpreti.service';

@Component({
  selector: 'app-interpretiricercaperid',
  templateUrl: './interpretiricercaperid.component.html',
  styleUrls: ['./interpretiricercaperid.component.css']
})
export class InterpretiricercaperidComponent implements OnInit {
  interpreteId: number | undefined;
  interprete?: Interprete;

  constructor(private interpretiService: InterpretiService) { }

  ngOnInit(): void {
  }

  cercaInterprete() {
    if (this.interpreteId) {
      this.interpretiService.getInterpreteById(this.interpreteId).subscribe(
        (response: Interprete) => {
          this.interprete = response;
        },
        (error) => {
          console.error("Errore durante la ricerca dell'interprete:", error);
        }
      );
    } else {
      console.error("Inserire un ID valido.");
    }
  }
}
