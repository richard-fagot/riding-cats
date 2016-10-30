import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent }   from './accueil/accueil.component';
import { PhotosComponent }   from './photos/photos.component';
import { ConcertsComponent }   from './concerts/concerts.component';
import { ContactComponent }   from './contact/contact.component';
import { VideosComponent }   from './videos/videos.component';
import { VideoPlaylistComponent }   from './video-playlist/video-playlist.component';
import { ShowVideoComponent }   from './show-video/show-video.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'concerts',  component: ConcertsComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'photos',  component: PhotosComponent },
  { path: 'videos',
    component: VideosComponent,
    children: [
      {
      path: '',
      component: VideoPlaylistComponent
      },
      {
      path: 'ppp',
      outlet: 'show-video',
      component: ShowVideoComponent
      }
    ] },
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
