import { style } from '@vanilla-extract/css';
import { vars } from 'modules/styles/styles.css';

export const registerStyles = {
  container: style({
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 316px)',
  }),
  link: style({
    color: vars.color.warning2,
    textDecoration: 'none',
  }),
  text: style({
    textAlign: 'center',
  }),
  imageContainer: style({
    '@media': {
      'screen and (max-width:728px)': {
        display: 'none',
      },
    },
  }),
  rightContainer: style({
    minWidth: 325,
    '@media': {
      'screen and (max-width:768px)': {
        minWidth: 80,
      },
    },
  }),
};
