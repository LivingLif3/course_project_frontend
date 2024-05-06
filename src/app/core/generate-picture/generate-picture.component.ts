import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowButtonComponent } from '../components/arrow-button/arrow-button.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generate-picture',
  standalone: true,
  imports: [CommonModule, ArrowButtonComponent, RouterLink],
  templateUrl: './generate-picture.component.html',
  styleUrls: ['./generate-picture.component.scss'],
})
export class GeneratePictureComponent {}
