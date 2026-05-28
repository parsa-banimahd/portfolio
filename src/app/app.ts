import { Component } from '@angular/core';

import {RouterLinkActive, RouterOutlet} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink } from '@angular/router';

/* Angular Material */

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import {Footer} from './components/footer/footer';


@Component({

  selector: 'app-root',

  standalone: true,

  imports: [


    RouterOutlet,
    RouterLink,

    MatToolbarModule,
    MatButtonModule,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    Footer,


  ],

  templateUrl: './app.html',

  styleUrls: ['./app.css']

})

export class App {
  opened = false;
  protected theme: any;

  protected toggleTheme() {

  }

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

  }
}
