import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListAlbumsComponent } from './component/list-albums/list-albums.component';
import { ArchivesComponent } from './component/archives/archives.component';
import { AddAlbumComponent } from './component/add-album/add-album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'add-album', component: AddAlbumComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
