export type ThemeColorType = 'fromGradient' | 'toGradient';
export interface IThemeRgbColor {
  r: number;
  g: number;
  b: number;
}

export interface ITheme extends IThemeRgbColor {
  theme: string;
}
