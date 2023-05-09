import { globalStyle } from '@vanilla-extract/css';
import { vars, style } from 'modules/styles/styles.css';

export const headerStyles = {
  container: style({
    padding: '20px 58px',
    backgroundColor: vars.color.primary1,
    color: 'white',
  }),
  outerContainer: style({
    backgroundColor: vars.color.primary1,
    paddingLeft: 58,
    paddingRight: 58,
    paddingTop: 10,
  }),
  innerContainer: style({
    paddingTop: 8,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
  }),
  link: style({
    cursor: 'pointer',
    ':hover': {
      color: vars.color.primary4,
    },
  }),
  upperContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  searchContainer: style({
    position: 'relative',
    width: 'fit-content',
    backgroundColor: 'white',
    borderRadius: 20,
    flexBasis: '40%',
  }),
  btn: style({}),
};
