import { style } from '@vanilla-extract/css';

export const profileStyles = {
  container: style({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  }),
  card: style({
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    minHeight: 300,
    '@media': {
      'screen and (min-width:425px)': {
        minWidth: 325,
      },
    },
  }),
  flex1: style({
    flex: 1,
  }),
  fitContent: style({
    height: 'fit-content',
  }),
  wFitContent: style({
    width: 'fit-content',
  }),
  left: style({
    minWidth: 100,
    flexBasis: '10%',
    maxWidth: 200,
  }),
  right: style({
    minWidth: 250,
    maxWidth: 250,
  }),
};
