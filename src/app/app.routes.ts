import { Routes } from '@angular/router';

/* صفحات */

import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Projects} from './pages/projects/projects';
import {Skills} from './pages/skills/skills';


export const routes: Routes = [

  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'skills',
    component: Skills
  }





];
