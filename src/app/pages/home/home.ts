import { Component } from '@angular/core';
import {AboutMe} from '../../components/about-me/about-me';
import {Hero} from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [
    AboutMe,
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
