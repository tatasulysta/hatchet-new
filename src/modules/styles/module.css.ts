import { style } from '@vanilla-extract/css';

import { vars } from './styles.css';

export const moduleStyles = {
  card: style({
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    minHeight: 300,
    '@media': {
      'screen and (min-width:425px)': {
        minWidth: 325,
        padding: 32,
      },
    },
  }),
  flex: style({
    display: 'flex',
  }),
  flexCenter: style({
    display: 'flex',
    alignItems: 'center',
  }),
  pointer: style({
    cursor: 'pointer',
  }),
  dividerSm: style({
    borderBottom: `1px solid ${vars.color.neutral2}`,
  }),
  dividerXl: style({
    borderBottom: `6px solid ${vars.color.neutral1}`,
  }),
  spaceBetween: style({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  centerDiv: style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  }),
};
