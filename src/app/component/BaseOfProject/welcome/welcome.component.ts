import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationServiceService } from '../../../services/authorization-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: any;
  userId: string = '';
  gifPlaying: boolean = false; 

  cards = [
    {
      title: 'Film',
      description: 'Esplora il mondo dei film.',
      imgSrc: '/assets/images/filmicon.jpg',
      imgHoverSrc: '/assets/images/gif/filmicon_hover.gif',
      navigate: () => this.navigateToPreFilm()
    },
    {
      title: 'Generi',
      description: 'Scopri i vari generi cinematografici.',
      imgSrc: '/assets/images/genereicon.jpg',
      imgHoverSrc: '/assets/images/gif/genereicon_hover.gif',
      navigate: () => this.navigateToPreGeneri()
    },
    {
      title: 'Interpreti',
      description: 'Conosci i tuoi attori preferiti.',
      imgSrc: '/assets/images/attoreicon.jpg',
      imgHoverSrc: '/assets/images/gif/attoreicon_hover.gif',
      navigate: () => this.navigateToPreInterprete()
    },
    {
      title: 'Console',
      description: 'Console per Admin.',
      imgSrc: '/assets/images/consoleicon.jpg',
      imgHoverSrc: '/assets/images/gif/consoleicon_hover.gif',
      navigate: () => this.navigateToConsole(),
      adminOnly: true
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthorizationServiceService) { }

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
    gif.src = gif.dataset['hoverSrc']!;
    this.gifPlaying = true; 
  }

  onMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const gif = target.querySelector('.card-gif') as HTMLImageElement;
    gif.src = gif.dataset['src']!;
    this.gifPlaying = false; 
  }

  isAdmin(): boolean {
    return this.authService.getAuthLevel() === 1;
  }

  navigateToConsole() {
    this.router.navigate(['homedashboard']);
  }
}