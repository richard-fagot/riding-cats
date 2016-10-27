import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ImageModal} from '../node_modules/angular2-image-popup/directives/angular2-image-popup/angular2-image-popup.js';

import { AppComponent }   from './app.component';
import { AccueilComponent }   from './accueil/accueil.component';
import { PhotosComponent }   from './photos/photos.component';
import { ConcertsComponent }   from './concerts/concerts.component';
import { ContactComponent }   from './contact/contact.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule],
  declarations: [ AppComponent,
                  AccueilComponent,
                  PhotosComponent,
                  ContactComponent,
                  ConcertsComponent,
                  ImageModal],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
