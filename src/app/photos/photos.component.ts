import { Component, OnInit } from '@angular/core';
import {RidingCatsService} from '../riding-cats.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  providers: [RidingCatsService]
})

export class PhotosComponent implements OnInit {

  indexOfImageToShow: number = -1;

  openModalWindow = false;
  imagePointer: number;

  list = [];
  images = [];

  gallery = [];

  constructor(private rcService: RidingCatsService) {}

  ngOnInit() {
    this.rcService.getPhotoList().then(gallery => {this.list = gallery; this.populateGallery(); });
  }

  populateGallery() {
    let line = [];
    for (let i = 0; i < this.list.length; i++) {
      if ((i > 0) && (i % 6 === 0)) {
        this.gallery.push(line);
        line = [];
      }
      let path = '../../assets/img/gallery/' + this.list[i];
      let thumb_path = '../../assets/img/gallery/thumb_' + this.list[i];
      this.images.push({ thumb: thumb_path, img: path });
      line.push({ thumb: thumb_path, img: path });
    }

    if (line.length > 0) {
      this.gallery.push(line);
    }
  }
  OpenImageModel(imageSrc, images) {
    let imageModalPointer;
    for (let i = 0; i < images.length; i++) {
      if (imageSrc === images[i].img) {
        imageModalPointer = i;
        console.log('jhhl', i);
        break;
      }
    }
    this.openModalWindow = true;
    this.images = images;
    this.imagePointer = imageModalPointer;
  }
  cancelImageModel() {
    this.openModalWindow = false;
  }

  showImageOfIndex(imageIndex: number): void {
    this.indexOfImageToShow = imageIndex;
  }

  isVisible(imageIndex: number): boolean {
    return this.indexOfImageToShow === imageIndex;
  }

  hideImage(): void {
    this.indexOfImageToShow = -1;
  }

  showPreviousImage(): void {
    this.indexOfImageToShow--;
    if (this.indexOfImageToShow < 0) {
      this.indexOfImageToShow = this.list.length - 1;
    }
  }

  showNextImage(): void {
    this.indexOfImageToShow++;
    if (this.indexOfImageToShow >= this.list.length) {
      this.indexOfImageToShow = 0;
    }
  }
}
