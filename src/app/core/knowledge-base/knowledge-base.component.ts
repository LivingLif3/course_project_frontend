import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../services/image.service';
import { Tile } from '../types/Tile';
import { MasonryOptions } from '../types/MasonryOptions';
import { NgxMasonryModule } from 'ngx-masonry';
import { Router } from '@angular/router';
import {ThemeSwitcherService} from "../services/theme-switcher.service";

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [CommonModule, NgxMasonryModule],
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeBaseComponent implements OnInit {
  public readonly masonryOptions: MasonryOptions = {
    gutter: 5,
  };

  private chosenFlag: string | null = null;

  private readonly flags: string[] = ['Author', 'Style', 'Name'];

  public isShowingMenu: boolean = false;

  /*test values of pictures*/
  private tiles: Tile[] = [
    {
      id: 0,
      imgUrl: '',
      imgName: 'portrait',
    },
    {
      id: 1,
      imgUrl: '',
      imgName: 'cry',
    },
    {
      id: 2,
      imgUrl: '',
      imgName: 'black',
    },
    {
      id: 3,
      imgUrl: '',
      imgName: 'mona lisa',
    },
    {
      id: 4,
      imgUrl: '',
      imgName: 'more',
    },
    {
      id: 5,
      imgUrl: '',
      imgName: 'night',
    },
    {
      id: 6,
      imgUrl: '',
      imgName: 'woman',
    },
    {
      id: 6,
      imgUrl: '',
      imgName: 'war',
    },
    {
      id: 7,
      imgUrl: '',
      imgName: 'mech',
    },
    {
      id: 8,
      imgUrl: '',
      imgName: 'bog',
    },
  ];

  constructor(
    public imageService: ImageService,
    private router: Router,
    public themeSwitcherService: ThemeSwitcherService
  ) { }

  ngOnInit(): void {}

  public navigateToPicturePage(id: number) {
    let navigate: Promise<boolean> = this.router.navigate([
      'knowledgeBase',
      id,
    ]);
  }

  public toggleMenu() {
    this.isShowingMenu = !this.isShowingMenu;
  }

  public setFlag(flag: string): void {
    this.chosenFlag = flag;
  }

  public eraseFlag(): void {
    this.chosenFlag = null;
  }

  public getFlag(): any {
    return this.chosenFlag;
  }

  public getFlags(): string[] {
    return this.flags;
  }

  public getTiles(): Tile[] {
    return this.tiles;
  }

  public getImage(name: string, theme: string) {
    return (theme === 'light')
      ? this.imageService.getImage(name, 'png')
      : this.imageService.getImage(name + 'Dark', 'png')
  }

  get theme$() {
    return this.themeSwitcherService.theme$;
  }
}
