import { Component, OnInit } from '@angular/core';

import { Interprete } from '../../../model/interprete.model';
import { InterpretiService } from '../../../services/interpreti.service';

@Component({
  selector: 'app-interpreti',
  templateUrl: './ListaInterpreti.component.html',
  styleUrls: ['./ListaInterpreti.component.css']
})
export class ListaInterpretiComponent implements OnInit {
  interpreti: Interprete[] = [];
  p = 1;
  pageSize = 8;

  constructor(private interpretiService: InterpretiService) { }

  ngOnInit(): void {
    this.caricaInterpreti();
  }

  caricaInterpreti() {
    this.interpretiService.getInterpreti().subscribe((data: Interprete[]) => {
      this.interpreti = data;
    });
  }

  show = false;
  enableShow() {
    this.show = !this.show;
  }
}
