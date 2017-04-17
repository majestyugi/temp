import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ImageService } from './image/image-service';
import { Image } from './image/image';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent {
  images: Array<Image>;

  constructor(private http: Http, private imageService: ImageService) {
    this.http = http;
  } 
  
  performSearch(tags: string): void {
    this.imageService.getImages(tags).subscribe(
      images => this.images = images
    );
  }  
}
