import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowButtonComponent } from '../components/arrow-button/arrow-button.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterLink } from '@angular/router';
import {ImageService} from "../services/image.service";
import {ThemeSwitcherService} from "../services/theme-switcher.service";

@Component({
  selector: 'app-generate-picture',
  standalone: true,
  imports: [CommonModule, ArrowButtonComponent, RouterLink],
  templateUrl: './generate-picture.component.html',
  styleUrls: ['./generate-picture.component.scss'],
})
export class GeneratePictureComponent {
  constructor(
    private imageService: ImageService,
    private themeSwitcherService: ThemeSwitcherService
  ) { }

  getImage(theme: string) {
    return (theme === 'light')
      ? this.imageService.getImage('microphone', 'png')
      : this.imageService.getImage('microphoneDark', 'png')
  }

  get theme$() {
    return this.themeSwitcherService.theme$;
  }
}
