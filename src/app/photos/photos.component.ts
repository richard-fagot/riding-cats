import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})

export class PhotosComponent implements OnInit {

  indexOfImageToShow: number = -1;

  openModalWindow: boolean = false;
  imagePointer: number;

  list = [
      "Dunes.jpg",
      "Dunes_15.jpg",
      "Dunes_12.jpg",
      "00162 (1500x1001).jpg",
      "00169 (1500x1000).jpg",
      "00173 (1500x1000).jpg",
      "00175 (1500x999).jpg",
      "00180 (1500x999).jpg",
      "00181 (1500x1000).jpg",
      "00182 (1500x1001).jpg",
      "00190 (1500x1001).jpg",
      "00196 (1500x1000).jpg",
      "00197 (1500x1000).jpg",
      "00198 (1500x1000).jpg",
      "00205 (1500x1000).jpg",
      "00206 (1500x1000).jpg",
      "00213 (1500x1000).jpg",
      "00218 (1500x1001).jpg",
      "00219 (1500x1000).jpg",
      "00220 (1500x1000).jpg",
      "10072016-_IGP9700-2.jpg",
      "11796360_906168519419599_1707766551244087282_n.jpg",
      "11825556_906168716086246_5039619851526901986_n.jpg",
      "11846748_906168876086230_3242464435630885259_n.jpg",
      "13339524_1150396608325196_4013251615108289879_n.jpg",
      "13607006_1163915120298552_2644834059264699465_n.jpg",
      "Al 9.jpg",
      "al photo.jpg",
      "Durfort Pascal 4.jpg",
      "Durfort pascal5.jpg",
      "IMG_1474.jpg",
      "IMG_1557.jpg",
      "IMG_1558.jpg",
      "IMG_2792.jpg",
      "IMG_2793.jpg",
      "IMG_2794.jpg",
      "IMG_2795.jpg",
      "IMG_2796.jpg",
      "IMG_2797.jpg",
      "IMG_2798.jpg",
      "IMG_2800.jpg",
      "IMG_2802.jpg",
      "IMG_2803.jpg",
      "IMG_2804.jpg",
      "IMG_2805.jpg",
      "IMG_2806.jpg",
      "IMG_2807.jpg",
      "mazamet.jpg",
      "realcroche8.jpg",
      "riding cats 3.jpg",
      "Riding Cats balance Rock&cars.jpg",
      "RocknCars2014DX7A2868.jpg",
      "RocknCars2014DX7A2916.jpg",
      "RocknCars2014DX7A3006.jpg",
      "RocknCars2014DX7A3012.jpg",
      "RocknCars2014DX7A3029.jpg",
      "RocknCars2014DX7A3106.jpg",
      "top 1.jpg",
    ];
  images = [];

  gallery = [];

  constructor() {

  }

  ngOnInit() {
    let line = [];
    for (var i = 0; i < this.list.length; i++) {
      if ((i > 0) && (i % 6 === 0)) {
        this.gallery.push(line);
        line = [];
      }
      let path = '../../assets/img/gallery/' + this.list[i];
      let thumb_path = '../../assets/img/gallery/thumb_' + this.list[i];
      this.images.push({ thumb: thumb_path, img: path });
      line.push({ thumb: thumb_path, img: path });
    }

    if(line.length > 0) {
      this.gallery.push(line);
    }
  }

  OpenImageModel(imageSrc, images) {
    //alert('OpenImages');
    var imageModalPointer;
    for (var i = 0; i < images.length; i++) {
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
    console.log("Show index " + imageIndex);
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
    console.log("Show previous image " + this.indexOfImageToShow + " of a total of " + this.list.length);
  }

  showNextImage(): void {
    this.indexOfImageToShow++;
    if (this.indexOfImageToShow >= this.list.length) {
      this.indexOfImageToShow = 0;
    }
  }
}
