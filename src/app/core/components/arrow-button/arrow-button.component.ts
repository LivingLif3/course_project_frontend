import { AppRoutingModule } from 'src/app/app-routing.module';
import { ImageService } from './../../services/image.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  standalone: true,
  styleUrls: ['./arrow-button.component.scss'],
})
export class ArrowButtonComponent {
  constructor(private imageService: ImageService) {}

  getImage() {
    return this.imageService.getImage('arrowButton', 'png');
  }
}
