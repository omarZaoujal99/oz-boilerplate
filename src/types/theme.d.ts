import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extending DefaultTheme with your Theme
}

export interface Colors {
  primary: string;
  secondary: string;
}

export interface Fonts {
  regular: string;
  medium: string;
  bold: string;
  thin: string;
  black: string;
}

export interface FontSizes {
  default: string;
  small: string;
  smaller: string;
  medium: string;
  big: string;
  bigger: string;
  titleDefault: string;
  titleSmall: string;
  titleMedium: string;
  titleBig: string;
}

export interface Margins {
  betweenSections: string;
  default: string;
  medium: string;
  small: string;
  big: string;
}

export interface Paddings {
  horizonMonitor: string;
  horizonLaptop: string;
  horizonTablet: string;
  horizonMobile: string;
  verticalMonitor: string;
  verticalLaptop: string;
  verticalTablet: string;
  verticalMobile: string;
  buttonDefault: string;
  buttonBig: string;
  buttonSmall: string;
  iconDefault: string;
  iconBig: string;
  iconSmall: string;
}

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  margins: Margins;
  paddings: Paddings;
}
