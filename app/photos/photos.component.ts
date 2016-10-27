import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'photos',
  templateUrl: 'photos.component.html',
})

export class PhotosComponent implements OnInit {

    openModalWindow:boolean=false;
    imagePointer:number;

    list = [
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
      "IMG_1474.JPG",
      "IMG_1557.JPG",
      "IMG_1558.JPG",
      "IMG_2792.JPG",
      "IMG_2793.JPG",
      "IMG_2794.JPG",
      "IMG_2795.JPG",
      "IMG_2796.JPG",
      "IMG_2797.JPG",
      "IMG_2798.JPG",
      "IMG_2800.JPG",
      "IMG_2802.JPG",
      "IMG_2803.JPG",
      "IMG_2804.JPG",
      "IMG_2805.JPG",
      "IMG_2806.JPG",
      "IMG_2807.JPG",
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
    images = [
    /*{ thumb: '../../assets/img/gallery/00162 (1500x1001).jpg', img: '../../assets/img/gallery/00162 (1500x1001).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00163 (1000x1500).jpg', img: '../../assets/img/gallery/00163 (1000x1500).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00165 (1000x1500).jpg', img: '../../assets/img/gallery/00165 (1000x1500).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00169 (1500x1000).jpg', img: '../../assets/img/gallery/00169 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00173 (1500x1000).jpg', img: '../../assets/img/gallery/00173 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00175 (1500x999).jpg', img: '../../assets/img/gallery/00175 (1500x999).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00180 (1500x999).jpg', img: '../../assets/img/gallery/00180 (1500x999).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00181 (1500x1000).jpg', img: '../../assets/img/gallery/00181 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00182 (1500x1001).jpg', img: '../../assets/img/gallery/00182 (1500x1001).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00190 (1500x1001).jpg', img: '../../assets/img/gallery/00190 (1500x1001).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00196 (1500x1000).jpg', img: '../../assets/img/gallery/00196 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00197 (1500x1000).jpg', img: '../../assets/img/gallery/00197 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00198 (1500x1000).jpg', img: '../../assets/img/gallery/00198 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00200 (1000x1500).jpg', img: '../../assets/img/gallery/00200 (1000x1500).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00204 (999x1500).jpg', img: '../../assets/img/gallery/00204 (999x1500).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00205 (1500x1000).jpg', img: '../../assets/img/gallery/00205 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00205 (1500x1000)_1.jpg', img: '../../assets/img/gallery/00205 (1500x1000)_1.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00206 (1500x1000).jpg', img: '../../assets/img/gallery/00206 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00213 (1500x1000).jpg', img: '../../assets/img/gallery/00213 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00218 (1500x1001).jpg', img: '../../assets/img/gallery/00218 (1500x1001).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00219 (1500x1000).jpg', img: '../../assets/img/gallery/00219 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/00220 (1500x1000).jpg', img: '../../assets/img/gallery/00220 (1500x1000).jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/10072016-_IGP9696-3.jpg', img: '../../assets/img/gallery/10072016-_IGP9696-3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/10072016-_IGP9700-2.jpg', img: '../../assets/img/gallery/10072016-_IGP9700-2.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/10072016-_IGP9749-3.jpg', img: '../../assets/img/gallery/10072016-_IGP9749-3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/10818811_442533039234520_780867766_n.jpg', img: '../../assets/img/gallery/10818811_442533039234520_780867766_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11072292_442533025901188_838517287_n.jpg', img: '../../assets/img/gallery/11072292_442533025901188_838517287_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11126244_442533029234521_1373872336_n.jpg', img: '../../assets/img/gallery/11126244_442533029234521_1373872336_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11132073_442533079234516_1622062817_n.jpg', img: '../../assets/img/gallery/11132073_442533079234516_1622062817_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11796360_906168519419599_1707766551244087282_n.jpg', img: '../../assets/img/gallery/11796360_906168519419599_1707766551244087282_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11825556_906168716086246_5039619851526901986_n.jpg', img: '../../assets/img/gallery/11825556_906168716086246_5039619851526901986_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11828687_892774644146862_1366685467191717680_n.jpg', img: '../../assets/img/gallery/11828687_892774644146862_1366685467191717680_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/11846748_906168876086230_3242464435630885259_n.jpg', img: '../../assets/img/gallery/11846748_906168876086230_3242464435630885259_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/13062007_10209441792071117_1967366623293764135_n.jpg', img: '../../assets/img/gallery/13062007_10209441792071117_1967366623293764135_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/13339524_1150396608325196_4013251615108289879_n.jpg', img: '../../assets/img/gallery/13339524_1150396608325196_4013251615108289879_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/13567097_1163915136965217_4059470017378208543_n.jpg', img: '../../assets/img/gallery/13567097_1163915136965217_4059470017378208543_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/13567097_1163915136965217_4059470017378208543_n_1.jpg', img: '../../assets/img/gallery/13567097_1163915136965217_4059470017378208543_n_1.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/13607006_1163915120298552_2644834059264699465_n.jpg', img: '../../assets/img/gallery/13607006_1163915120298552_2644834059264699465_n.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Al 2.jpg', img: '../../assets/img/gallery/Al 2.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Al 4.jpg', img: '../../assets/img/gallery/Al 4.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Al 7.jpg', img: '../../assets/img/gallery/Al 7.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Al 9.jpg', img: '../../assets/img/gallery/Al 9.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/al photo.jpg', img: '../../assets/img/gallery/al photo.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Al3.jpg', img: '../../assets/img/gallery/Al3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/cos 1.jpg', img: '../../assets/img/gallery/cos 1.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/cos10.jpg', img: '../../assets/img/gallery/cos10.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/cos7.jpg', img: '../../assets/img/gallery/cos7.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/cos8.jpg', img: '../../assets/img/gallery/cos8.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/cos8_1.jpg', img: '../../assets/img/gallery/cos8_1.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Durfort 9.jpg', img: '../../assets/img/gallery/Durfort 9.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Durfort Pascal 4.jpg', img: '../../assets/img/gallery/Durfort Pascal 4.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Durfort pascal5.jpg', img: '../../assets/img/gallery/Durfort pascal5.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_1474.JPG', img: '../../assets/img/gallery/IMG_1474.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_1557.JPG', img: '../../assets/img/gallery/IMG_1557.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_1558.JPG', img: '../../assets/img/gallery/IMG_1558.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2792.JPG', img: '../../assets/img/gallery/IMG_2792.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2793.JPG', img: '../../assets/img/gallery/IMG_2793.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2794.JPG', img: '../../assets/img/gallery/IMG_2794.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2795.JPG', img: '../../assets/img/gallery/IMG_2795.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2796.JPG', img: '../../assets/img/gallery/IMG_2796.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2797.JPG', img: '../../assets/img/gallery/IMG_2797.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2798.JPG', img: '../../assets/img/gallery/IMG_2798.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2800.JPG', img: '../../assets/img/gallery/IMG_2800.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2802.JPG', img: '../../assets/img/gallery/IMG_2802.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2803.JPG', img: '../../assets/img/gallery/IMG_2803.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2804.JPG', img: '../../assets/img/gallery/IMG_2804.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2805.JPG', img: '../../assets/img/gallery/IMG_2805.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2806.JPG', img: '../../assets/img/gallery/IMG_2806.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/IMG_2807.JPG', img: '../../assets/img/gallery/IMG_2807.JPG', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/lst.txt', img: '../../assets/img/gallery/lst.txt', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/mazamet 3.jpg', img: '../../assets/img/gallery/mazamet 3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/mazamet.jpg', img: '../../assets/img/gallery/mazamet.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/nogaro5.jpg', img: '../../assets/img/gallery/nogaro5.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcorche6.jpg', img: '../../assets/img/gallery/realcorche6.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcroche3.jpg', img: '../../assets/img/gallery/realcroche3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcroche4.jpg', img: '../../assets/img/gallery/realcroche4.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcroche5.jpg', img: '../../assets/img/gallery/realcroche5.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcroche7.jpg', img: '../../assets/img/gallery/realcroche7.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/realcroche8.jpg', img: '../../assets/img/gallery/realcroche8.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/riding cats 3.jpg', img: '../../assets/img/gallery/riding cats 3.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/Riding Cats balance Rock&cars.jpg', img: '../../assets/img/gallery/Riding Cats balance Rock&cars.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2863.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2863.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2868.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2868.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2871.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2871.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2875.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2875.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2893.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2893.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2916.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2916.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2920.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2920.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2924.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2924.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A2932.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A2932.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3006.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3006.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3012.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3012.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3029.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3029.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3103.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3103.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3106.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3106.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/RocknCars2014DX7A3107.jpg', img: '../../assets/img/gallery/RocknCars2014DX7A3107.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/top 1.jpg', img: '../../assets/img/gallery/top 1.jpg', description: 'Image 1' },
    { thumb: '../../assets/img/gallery/', img: '../../assets/img/gallery/', description: 'Image 1' },*/
    ];

    gallery = [];

    constructor() {

    }

    ngOnInit() {
      let line = [];
      for(var i = 0 ; i < this.list.length ; i++) {
        if((i > 0) && (i % 6 === 0)) {
        this.gallery.push(line);
        line = [];
        }
        let path = '../../assets/img/gallery/'+this.list[i];
        this.images.push({thumb: path, img: path});
        line.push({thumb: path, img: path});
      }
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
