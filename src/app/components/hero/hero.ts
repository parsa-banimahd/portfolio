import { Component } from '@angular/core';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatCard, MatCardContent} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
