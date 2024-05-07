import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ArrowButtonComponent} from "../components/arrow-button/arrow-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-description-generation',
  standalone: true,
  imports: [CommonModule, ArrowButtonComponent, RouterLink],
  templateUrl: './description-generation.component.html',
  styleUrls: ['./description-generation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionGenerationComponent {

}
