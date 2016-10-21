import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent }   from './accueil/accueil.component';
import { PhotosComponent }   from './photos/photos.component';
import { ConcertsComponent }   from './concerts/concerts.component';
import { ContactComponent }   from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'concerts',  component: ConcertsComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'photos',  component: PhotosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
