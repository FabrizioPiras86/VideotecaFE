import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilmService } from '../../../services/films.service';
import Chart from 'chart.js/auto';
import { GeneriService } from '../../../services/generi-service.service';
import { InterpretiService } from '../../../services/interpreti.service';
import { UtentiService } from '../../../services/utenti.service';


@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.css']
})
export class HomedashboardComponent implements OnInit {
  @ViewChild('canvasGeneri') canvasGeneri!: ElementRef;
  @ViewChild('canvasInterpreti') canvasInterpreti!: ElementRef;

  numeroFilm: number = 0;
  numeroGeneri: number = 0;
  numeroInterpreti: number = 0;
  numeroUtenti: number = 0;

  constructor(
    private filmService: FilmService,
    private generiService: GeneriService,
    private interpretiService: InterpretiService,
    private utentiService: UtentiService
  ) {}

  ngOnInit(): void {

    this.getNumeroFilm();
    this.getNumeroGeneri();
    this.getNumeroInterpreti();
    this.getNumeroUtenti();


    this.filmService.getNumeroFilmPerGenere().subscribe(
      data => this.createPieChart(data, this.canvasGeneri.nativeElement, 'Generi'),
      error => console.error('Errore durante il recupero del numero di film per genere:', error)
    );

    this.filmService.getNumeroFilmPerInterprete().subscribe(
      data => this.createPieChart(data, this.canvasInterpreti.nativeElement, 'Interpreti'),
      error => console.error('Errore durante il recupero del numero di film per interprete:', error)
    );
  }

  private getNumeroFilm() {
    this.filmService.getNumeroTotaleFilm().subscribe(
      data => this.numeroFilm = data,
      error => console.error('Errore durante il recupero del numero totale di film:', error)
    );
  }

  private getNumeroGeneri() {
    this.generiService.getNumeroTotaleGeneri().subscribe(
      data => this.numeroGeneri = data,
      error => console.error('Errore durante il recupero del numero totale di generi:', error)
    );
  }

  private getNumeroInterpreti() {
    this.interpretiService.getNumeroTotaleInterpreti().subscribe(
      data => this.numeroInterpreti = data,
      error => console.error('Errore durante il recupero del numero totale di interpreti:', error)
    );
  }

  private getNumeroUtenti() {
    this.utentiService.getNumeroTotaleUtenti().subscribe(
      data => this.numeroUtenti = data,
      error => console.error('Errore durante il recupero del numero totale di utenti:', error)
    );
  }

  private createPieChart(data: any, canvas: HTMLCanvasElement, title: string): void {
    if (typeof data !== 'object' || data === null) {
      console.error('I dati ricevuti non sono validi:', data);
      return;
    }

    // Trasforma l'oggetto in un array di oggetti con coppie nome e numeroFilm
    const chartData = Object.keys(data).map((nome) => ({
      nome: nome,
      numeroFilm: data[nome]
    }));

    const labels = chartData.map((item: any) => item.nome);
    const values = chartData.map((item: any) => item.numeroFilm);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Impossibile ottenere il contesto del canvas.');
      return;
    }

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: title,
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: title
          },
          legend: {
            position: 'right'
          }
        }
      }
    });
  }
}
