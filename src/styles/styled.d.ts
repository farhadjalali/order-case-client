import "styled-components";

interface IPalette {
  transparent: string;
  current: string;
  white: string;
  black: string;

  // Slate
  slate100: string;

  // Stone
  stone200: string;
  stone300: string;
  stone500: string;
  stone700: string;
  stone800: string;

  // Neutral
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;

  // Red
  red600: string;
  red700: string;
  rose400: string;

  // Green
  green600: string;
  green800: string;
  green900: string;

  // Blue
  sky500: string;
  blue400: string;
  blue500: string;

  // Yellow
  amber100: string;
  yellow100: string;
  yellow400: string;
  yellow500: string;

  // Violet
  violet400: string;
  violet700: string;

  // Custom
  redOrange: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    dark: boolean;
    colors: IPalette;
  }
}
