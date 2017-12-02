import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { BiographieComponent } from './biographie/biographie.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { VideosComponent } from './videos/videos.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { ContactComponent } from './contact/contact.component';
import { PhotosComponent } from './photos/photos.component';
import { PresseComponent } from './presse/presse.component';

import {MessagesService} from './messages-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BiographieComponent,
    ConcertsComponent,
    VideosComponent,
    VideoPlaylistComponent,
    ShowVideoComponent,
    ContactComponent,
    PhotosComponent,
    PresseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
