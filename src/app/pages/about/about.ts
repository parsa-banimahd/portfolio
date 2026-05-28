import { Component } from '@angular/core';
import {AboutMe} from '../../components/about-me/about-me';

@Component({
  selector: 'app-about',
  imports: [
    AboutMe
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
