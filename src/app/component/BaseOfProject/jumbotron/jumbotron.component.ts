import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() Titolo: string = ""; // Utilizzo del decorator @Input per ricevere il valore da un controllo esterno
  @Input() SottoTitolo: string = ""; // Utilizzo del decorator @Input per ricevere il valore da un controllo esterno
  @Input() Show: boolean = true; // Utilizzo del decorator @Input per ricevere il valore da un controllo esterno

  constructor() { }

  ngOnInit(): void {
    // Implementazione del metodo ngOnInit
  }
}

