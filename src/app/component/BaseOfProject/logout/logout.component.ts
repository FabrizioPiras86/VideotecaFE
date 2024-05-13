import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  BasicAuth: any;
  ngOnInit(): void {
    this.BasicAuth.clearAll();
  }

}
