import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ArrowButtonComponent} from "../components/arrow-button/arrow-button.component";
import {RouterLink} from "@angular/router";
import {ImageService} from "../services/image.service";
import {ThemeSwitcherService} from "../services/theme-switcher.service";

@Component({
  selector: 'app-description-generation',
  standalone: true,
  imports: [CommonModule, ArrowButtonComponent, RouterLink],
  templateUrl: './description-generation.component.html',
  styleUrls: ['./description-generation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionGenerationComponent {

  constructor(
    private imageService: ImageService,
    private themeSwitcherService: ThemeSwitcherService
  ) {
  }

  getImage(theme: string) {
    return (theme === 'light')
      ? this.imageService.getImage('microphone', 'png')
      : this.imageService.getImage('microphoneDark', 'png')
  }

  get theme$() {
    return this.themeSwitcherService.theme$;
  }
}
