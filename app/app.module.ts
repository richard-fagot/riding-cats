import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
                  ConcertsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
