import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      title: 'Aula 01 - Angular com TypeScript',
      src: './assets/img/image-01.png',
    };
    this.slides[1] = {
      id: 1,
      title: 'Aula 02 - Android com Kotlin',
      src: './assets/img/image-02.png',
    }
    this.slides[2] = {
      id: 3,
      title: 'Aula 03 - IOS com Swift',
      src: './assets/img/image-03.png',
    }
    this.slides[3] = {
      id: 3,
      title: 'Aula 04 - Flutter com Dart',
      src: './assets/img/image-04.png',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
