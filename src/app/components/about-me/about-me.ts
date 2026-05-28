import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  imports: [
    MatCard,
    MatIcon,
    MatCardContent
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
