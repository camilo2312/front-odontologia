import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre = 'Camilo';

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.nombre = 'Pepe';
  }


  goLogin() {
    this.route.navigate(['auth/login']);
  }
}
