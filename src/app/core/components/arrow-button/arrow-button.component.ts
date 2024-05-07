import { ImageService } from '../../services/image.service';
import { Component, Input } from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {ThemeSwitcherService} from "../../services/theme-switcher.service";

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  standalone: true,
  styleUrls: ['./arrow-button.component.scss'],
  imports: [
    AsyncPipe,
    NgIf,
    CommonModule
  ]
})
export class ArrowButtonComponent {
  constructor(
    private imageService: ImageService,
    private themeSwitcherService: ThemeSwitcherService
  ) { }

  getImage(theme: string) {
    return (theme === 'light')
      ? this.imageService.getImage('arrowButton', 'png')
      : this.imageService.getImage('arrowButtonDark', 'png')
  }

  get theme$() {
    return this.themeSwitcherService.theme$;
  }
}
