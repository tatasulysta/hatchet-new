import { style } from '@vanilla-extract/css';
import { vars } from 'modules/styles/styles.css';

export const footerStyles = {
  container: style({
    backgroundColor: vars.color.primary1,
    padding: '20px 58px',
  }),
  innerContainer: style({
    backgroundColor: 'white',
    borderRadius: 20,
    minHeight: 80,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 50px',
    justifyContent: 'space-between',
  }),
  titleContainer: style({
    flexBasis: '50%',
  }),
  rightContainer: style({
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  }),
  button: style({
    paddingTop: 12,
    paddingBottom: 12,
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 100,
  }),
};
