import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    images: Array<object> = [];
    results: Array<object> = [];
    x: boolean;
    filter: string;

    navigate(route: string) {
        this.router.navigate([route]);
    }

    toggleSearch() {
        this.x = !this.x;

        if(!this.x) {
            this.filter='';
        }
    }

    loadData(event) {
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                if(this.images.length === 0) {
                    break;
                }

                this.results.push(this.images.pop());
            }
            event.target.complete();
            if(this.images.length === 0) {
                event.target.disabled = true;
            }
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (this.images.length === 0) {
            //     event.target.disabled = true;
            // }
        }, 500);
    }

    getResults() {
        this.resetResults();
        let images = [];
        if (this.filter !== '') {
            for (let i = 0; i < this.images.length; i++) {
                if (this.images[i].type.toLowerCase().includes(this.filter.toLowerCase()) ||
                    this.images[i].name.toLowerCase().includes(this.filter.toLowerCase()) ) {
                    images.push(this.images[i]);
                }
            }
            this.images = images;
        }
        this.initialize();
    }

    initialize() {
        if(this.images.length === 0) {
            return;
        } else {
            for (let i = 0; i < 5; i++) {
                this.results.push(this.images.pop());
                if (this.images.length === 0)
                    break;
            }
        }
    }

    constructor(private router: Router) {
        this.filter = '';
        this.resetResults();
        this.initialize();
    }

    resetResults() {
        this.images = [];
        this.images.push({ src: '/assets/eSports/1.jpg', name: 'Bloodseeker', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/2.jpg', name: 'Che Guevara', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/3.jpg', name: 'Guaido', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/4.jpg', name: 'Madre Naturaleza', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/5.jpg', name: 'fueguito', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/6.jpg', name: 'Chabista', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/7.jpg', name: 'Bagres', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/8.jpg', name: 'noc', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/9.jpg', name: 'chabes', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/10.jpg', name: 'Damian', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/11.jpg', name: 'a', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/12.jpg', name: 'Malandro del Centro', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/13.jpg', name: 'Estudiante de Tele', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/14.jpg', name: 'Esparza', type: 'eSports' });
        this.images.push({ src: '/assets/eSports/15.jpg', name: 'g', type: 'eSports' });

        this.images.push({ src: '/assets/paintings/1.jpg', name: 'Dojo', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/2.jpg', name: 'Satanismo', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/3.jpg', name: 'Van Go', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/4.jpg', name: 'Van Gogh wapo', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/5.jpg', name: 'El lago', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/6.jpg', name: 'La mata', type: 'Painting' });
        this.images.push({ src: '/assets/paintings/7.jpg', name: 'Sunflower (ft. Post Malone)', type: 'Painting' });

        this.images.push({ src: '/assets/8-bit/1.png', name: 'You are a dream within my dream', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/2.png', name: "If we ever stop talking, remember that I will miss you more than you'd ever do", type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/3.png', name: "I miss you in ways I didn't know existed", type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/4.png', name: 'Ya me ladillé de pensar en nombres', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/5.png', name: '8bits son pa maricos', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/6.png', name: 'Tú si ere marico', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/7.png', name: 'Wtf en qué planeta estás we', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/8.png', name: 'Jajskaksjaksjaksj que wea', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/9.png', name: 'Marico qué hace un avión en la luna XD', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/10.png', name: 'Que sad marico un alpinista en marte', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/11.png', name: 'marakaibo x el puente', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/12.png', name: 'dragon bol', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/13.png', name: 'Bolas en el cielo', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/14.png', name: 'qlo berde', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/15.png', name: 'no le pegue a la blak', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/16.png', name: 'kanada', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/17.png', name: 'pompei', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/18.png', name: 'mi carro cuando le echo gasolina', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/19.png', name: 'la antiwua grecia en la playa', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/20.png', name: 'disneilandia', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/21.png', name: 'dios mio quien se muriera pal coño', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/22.png', name: 'barinas', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/23.png', name: 'cuando papi podía correr:(', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/24.png', name: 'cuando voy a marakaibo y empiezo a pasar el puente', type: '8-bit' });
        this.images.push({ src: '/assets/8-bit/25.png', name: 'ok 0 maricoteo t extraño :\'ccccc', type: '8-bit' });

        this.images.push({ src: '/assets/chibi/1.jpg', name: 'EVANGELION SHIT QUE TRAUMA', type: 'chibi' });
        this.images.push({ src: '/assets/chibi/2.jpg', name: 'AAAAAAAAAAAAAAAAAAAAAAAAA top waifu', type: 'chibi' });
        this.images.push({ src: '/assets/chibi/3.jpg', name: 'Carlos Suarez hablandome', type: 'chibi' });
        this.images.push({ src: '/assets/chibi/4.jpg', name: 'Shy Guy seksi', type: 'chibi' });
        this.images.push({ src: '/assets/chibi/5.jpg', name: 'Shy Guy más cuchi todavía', type: 'chibi' });

        this.results = [];
    }
}
