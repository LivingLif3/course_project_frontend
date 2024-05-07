import { ThemeSwitcherService } from '../services/theme-switcher.service';
import { ImageService } from '../services/image.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowInfoComponent } from './components/row-info/row-info.component';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-first-steps',
  standalone: true,
  imports: [CommonModule, RowInfoComponent, RouterLink],
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstStepsComponent {
  informationRows: Record<string, string>[] = [
    {
      info: 'Find the things you are interested in',
      image: '',
      additionalImage: this.imageService.getImage('fox', 'png'),
      position: 'left',
    },
    {
      info: 'Filter the information by different tags',
      image: '',
      additionalImage: this.imageService.getImage('dinner', 'png'),
      position: 'right',
    },
    {
      info: 'Discover new things',
      image: '',
      additionalImage: this.imageService.getImage('god', 'png'),
      position: 'left',
    },
    {
      info: 'Generate new images',
      image: '',
      additionalImage: this.imageService.getImage('adam', 'png'),
      position: 'right',
    },
    {
      info: 'Make conclusions of your work',
      image: '',
      additionalImage: this.imageService.getImage('angels', 'png'),
      position: 'left',
    },
  ];

  constructor(
    private imageService: ImageService,
    private themeSwitcherService: ThemeSwitcherService,
    private router: Router
  ) {}

  getArrow(position: string, theme: string) {
    if (theme === 'light') {
      return position === 'left'
        ? this.imageService.getImage('leftLightArrow', 'svg')
        : this.imageService.getImage('rightLightArrow', 'svg');
    } else {
      return position === 'left'
        ? this.imageService.getImage('leftDarkArrow', 'svg')
        : this.imageService.getImage('rightDarkArrow', 'svg');
    }
  }

  getImage(name: string) {
    return this.imageService.getImage(name, 'png');
  }

  get theme$() {
    return this.themeSwitcherService.theme$;
  }

  public onClick() {
    let nav = this.router.navigate(['knowledgeBase'])
  }
}
