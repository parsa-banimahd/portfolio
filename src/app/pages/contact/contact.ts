import { Component } from '@angular/core';
import {ContactC} from '../../components/contact-c/contact-c';


@Component({
  selector: 'app-contact-page',
  imports: [
    ContactC
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
