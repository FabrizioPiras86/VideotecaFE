import { Component, OnInit } from '@angular/core';
import { Genere } from '../../../model/genere.model';
import { GeneriService } from '../../../services/generi-service.service';


@Component({
  selector: 'app-ListaGenere',
  templateUrl: './ListaGeneri.component.html',
  styleUrls: ['./ListaGeneri.component.css']
})
export class ListaGeneriComponent implements OnInit {
  generi: Genere[] = [];
  p: number = 1;
  pageSize: number = 10;

  constructor(private generiService: GeneriService) { }

  ngOnInit(): void {
    this.caricaGeneri();
  }

  caricaGeneri() {
    this.generiService.getGeneri().subscribe((data: Genere[]) => {
      this.generi = data;
    });
  }

}


