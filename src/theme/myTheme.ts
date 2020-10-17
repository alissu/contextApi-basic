import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

/*
ESSAS SÃO AS OPÇÕES:
  common: CommonColors;
  type: PaletteType;
  contrastThreshold: number;
  tonalOffset: PaletteTonalOffset;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  grey: Color;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getContrastText: (background: string) => string;
  augmentColor: {
    (
      color: ColorPartial,
      mainShade?: number | string,
      lightShade?: number | string,
      darkShade?: number | string
    ): PaletteColor;
    (color: PaletteColorOptions): PaletteColor;
  };
*/

const myTheme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const myDarkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

export { myTheme, myDarkTheme };