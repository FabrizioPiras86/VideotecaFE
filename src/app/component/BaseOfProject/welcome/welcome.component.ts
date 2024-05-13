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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId') || '';
    });
  }

  bottomGeneri() {
    this.router.navigate(['Pregeneri']);
  }

  bottomFilm() {
    this.router.navigate(['Prefilm']);
  }

  bottomInterpreti() {
    this.router.navigate(['preinterprete']);
  }
}

