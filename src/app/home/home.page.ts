import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: Array<object> = [];
  filter: string;

  getResults() {
    console.log(this.filter);
    if (this.filter === '') {
      return this.images;
    } else {
      const images = [];
      for (let img of this.images) {
        if (img.type.includes(this.filter) || img.name.includes(this.filter)) {
          console.log(img.src);
          images.push(img);
        }
      }
      return images;
    }
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  constructor() {
    this.filter = 'chi';

    this.images.push({ src: '/assets/eSports/1.jpg', name: 'first', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/2.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/3.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/4.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/5.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/6.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/7.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/8.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/9.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/10.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/11.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/12.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/13.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/14.jpg', name: 'a', type: 'eSports' });
    this.images.push({ src: '/assets/eSports/15.jpg', name: 'a', type: 'eSports' });

    this.images.push({ src: '/assets/paintings/1.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/2.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/3.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/4.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/5.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/6.jpg', name: 'a', type: 'Painting' });
    this.images.push({ src: '/assets/paintings/7.jpg', name: 'a', type: 'Painting' });

    this.images.push({ src: '/assets/8-bit/1.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/2.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/3.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/4.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/5.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/6.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/7.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/8.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/9.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/10.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/11.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/12.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/13.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/14.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/15.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/16.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/17.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/18.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/19.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/20.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/21.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/22.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/23.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/24.png', name: 'a', type: '8-bit' });
    this.images.push({ src: '/assets/8-bit/25.png', name: 'a', type: '8-bit' });

    this.images.push({ src: '/assets/chibi/1.jpg', name: 'a', type: 'chibi' });
    this.images.push({ src: '/assets/chibi/2.jpg', name: 'a', type: 'chibi' });
    this.images.push({ src: '/assets/chibi/3.jpg', name: 'a', type: 'chibi' });
    this.images.push({ src: '/assets/chibi/4.jpg', name: 'a', type: 'chibi' });
    this.images.push({ src: '/assets/chibi/5.jpg', name: 'a', type: 'chibi' });
  }
}
