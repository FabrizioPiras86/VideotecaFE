import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: any;
  userId: string = '';
  titolo: string = "Benvenuti in Alpha Videoteca";
  sottotitolo: string = "Tantissimi film da vedere e scaricare";
  gifPlaying: boolean = false; // Variabile per controllare lo stato della GIF

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId') || '';
    });
  }

  navigateToPreFilm() {
    this.router.navigate(['prefilm']);
  }

  navigateToPreGeneri() {
    this.router.navigate(['Pregeneri']);
  }

  navigateToPreInterprete() {
    this.router.navigate(['preinterprete']);
  }

  onMouseOver(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const gif = target.querySelector('.card-gif') as HTMLImageElement;
    this.gifPlaying = true; 
  }

  onMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const gif = target.querySelector('.card-gif') as HTMLImageElement;
    this.gifPlaying = false; 
  }
}
