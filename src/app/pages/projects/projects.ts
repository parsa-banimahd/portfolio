import { Component } from '@angular/core';
import {ProjectC} from '../../components/project-c/project-c';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectC

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
