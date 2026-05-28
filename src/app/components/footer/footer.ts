import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-footer',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
