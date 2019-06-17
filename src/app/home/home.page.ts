import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: Array<object> = [];
  filter: string;

  constructor() {
    this.filter = '';
    this.images.push({ src: 'first image', type: 'Cute' });
    this.images.push({ src: 'second image', type: 'Cute' });
    this.images.push({ src: 'third image', type: 'eSports' });
    this.images.push({ src: 'fourth image', type: 'eSports' });
  }
}
