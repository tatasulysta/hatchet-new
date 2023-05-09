import { colors } from '@mui/joy';
import { style } from '@vanilla-extract/css';

export const emptyViewStyles = {
  animationContainer: style({
    marginTop: '30px',
    marginBottom: '30px',
    width: '30vw',
  }),
  container: style({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80vw',
    margin: '0 auto',
    textAlign: 'center',
  }),
  link: style({
    color: colors.blue[500],
    cursor: 'pointer',
    textDecoration: 'underline',
  }),
};
