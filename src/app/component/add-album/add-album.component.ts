import { Component } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album: Album = new Album();

  constructor(private albumService: AlbumService) { }

  onSubmit(): void {
    this.albumService.addAlbum(this.album).subscribe(() => {
      alert('Album added successfully');
    });
  }
}
