import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrls: ['./row-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RowInfoComponent {
  @Input()
  info!: string;

  @Input()
  additionalImage!: string;

  @Input()
  invert!: boolean;

  @Input()
  arrow?: string = undefined;

  @Input()
  left?: boolean = false;

  @Input()
  right?: boolean = false;
}
