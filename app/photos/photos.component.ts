import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ImageModal} from '../../node_modules/angular2-image-popup/directives/angular2-image-popup/angular2-image-popup.js';

@Component({
  moduleId: module.id,
  selector: 'photos',
  directives: [ImageModal],
  templateUrl: 'photos.component.html',
})

export class PhotosComponent {

openModalWindow:boolean=false;
    imagePointer:number;
    images = [
      { thumb: './app/assets/images/gallery/thumbs/img1.jpg', img: './app/assets/images/gallery/img1.jpg', description: 'Image 1' },
      { thumb: './app/assets/images/gallery/thumbs/img2.jpg', img: './app/assets/images/gallery/img2.jpg', description: 'Image 2' },
      { thumb: './app/assets/images/gallery/thumbs/img3.jpg', img: './app/assets/images/gallery/img3.jpg', description: 'Image 3' },
      { thumb: './app/assets/images/gallery/thumbs/img4.jpg', img: './app/assets/images/gallery/img4.jpg', description: 'Image 4' },
      { thumb: './app/assets/images/gallery/thumbs/img5.jpg', img: './app/assets/images/gallery/img5.jpg', description: 'Image 5' }
    ];
    constructor() {

    }
   OpenImageModel(imageSrc,images) {
     //alert('OpenImages');
     var imageModalPointer;
     for (var i = 0; i < images.length; i++) {
            if (imageSrc === images[i].img) {
              imageModalPointer = i;
              console.log('jhhl',i);
              break;
            }
       }
     this.openModalWindow = true;
     this.images = images;
     this.imagePointer  = imageModalPointer;
   }
   cancelImageModel() {
     this.openModalWindow = false;
   }

}
