import { extendTheme } from '@mui/joy';
import type { PaletteRange } from '@mui/joy/styles';

import { color } from './colors';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
  interface TypographySystemOverrides {
    display1: true;
    display2: false;
    h1: true;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    bodyDefault: true;
    body1: true;
    body2: true;
    body3: true;
    body4: true;
    body5: true;
  }
}
export const customTheme = extendTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '26px',
      lineHeight: '45px',
      // fontFamily: 'Poppins, sans-serif',
      // fontSize: '40px',
      // lineHeight: '72px',
    },
    bodyDefault: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '24px',
      lineHeight: '38px',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '22px',
      lineHeight: '36px',
      // fontFamily: 'Poppins, sans-serif',
      // fontSize: '36px',
      // lineHeight: '54px',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '18px',
      lineHeight: '30px',
    },
    body3: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '22px',
    },
    body4: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '14px',
      lineHeight: '20px',
    },
    body5: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '12px',
      lineHeight: '18px',
    },
    display1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '10px',
      lineHeight: '16px',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          '100': color.primary1,
          '200': color.primary2,
          '300': color.primary3,
          '400': color.primary4,
          '500': color.primary5,
        },
        secondary: {
          '100': color.secondary,
        },
        danger: {
          '100': color.danger1,
          '200': color.danger2,
          '300': color.danger3,
          '400': color.danger4,
          '500': color.danger5,
        },
        info: {
          '100': color.info1,
          '200': color.info2,
          '300': color.info3,
          '400': color.info4,
          '500': color.info5,
        },
        success: {
          '100': color.success1,
          '200': color.success2,
          '300': color.success3,
          '400': color.success4,
          '500': color.success5,
        },
        warning: {
          '100': color.warning1,
          '200': color.warning2,
          '300': color.warning3,
          '400': color.warning4,
          '500': color.warning5,
        },
        neutral: {
          '100': color.neutral1,
          '200': color.neutral2,
          '300': color.neutral3,
          '400': color.neutral4,
          '500': color.neutral5,
        },
      },
    },
  },
  components: {
    JoyInput: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.type !== 'checkbox' && {
            borderRadius: '10px',
            borderWidth: '2px',
            fontSize: 18,
            padding: 8,
            borderColor: `${color.neutral4} !important`,
            '--Input-focusedThickness': '1px',
            '--Input-focusedHighlight': color.primary2,
            '.Joy-focused': {
              borderColor: 'none',
            },
          }),
          ...(ownerState.type === 'checkbox' && {
            padding: 0,
            minWidth: 30,
            margin: 0,
            bordeer: 'none',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            '--Input-focusedHighlight': 'transparent',
          }),
        }),
        input: {
          '::placeholder': {
            fontWeight: 400,
            color: color.neutral4,
          },
        },
      },
    },
    JoyButton: {
      defaultProps: {
        size: 'lg',
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'solid' && {
            backgroundColor: color.warning1,
            borderRadius: 20,
            ':hover': {
              backgroundColor: color.warning1,
            },
            ':disabled': {
              backgroundColor: color.warning3,
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            border: 'none',
            borderRadius: 20,
            color: 'white',
            ':hover': {
              color: color.primary2,
              backgroundColor: color.primary5,
            },
          }),
          ...(ownerState.variant === 'plain' && {
            border: `2px solid ${color.warning1}`,
            color: color.warning1,
            ':hover': {
              backgroundColor: color.warning5,
            },
          }),
        }),
      },
    },
    JoyAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'danger' && {
            color: color.danger1,
            backgroundColor: color.danger5,
          }),
        }),
      },
    },
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'danger' && {
            backgroundColor: 'rgba(250, 213, 206, 0.4)',
            color: color.danger1,

            border: `2px solid ${color.danger1}`,
          }),
          ...(ownerState.color === 'info' && {
            backgroundColor: 'rgba(202, 237, 250, 0.4)',
            color: color.info1,
            border: `2px solid ${color.info1}`,
          }),
          ...(ownerState.color === 'neutral' && {
            backgroundColor: 'rgba(244, 244, 244, 0.8)',
            color: color.neutral4,
            border: `2px solid ${color.neutral4}`,
          }),
          ...(ownerState.color === 'success' && {
            backgroundColor: 'rgba(199, 248, 207, 0.3)',
            color: color.success1,
            border: `2px solid ${color.success1}`,
          }),
          ...(ownerState.color === 'warning' && {
            backgroundColor: 'rgba(253, 245, 203, 0.5)',
            color: color.warning1,
            border: `2px solid ${color.warning1}`,
          }),
        }),
      },
    },
  },
});
