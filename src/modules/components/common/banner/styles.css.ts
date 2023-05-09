import { style, vars } from 'modules/styles/styles.css';

export const bannerStyles = {
  container: style({
    backgroundColor: vars.color.primary1,
    borderRadius: 10,
    paddingTop: 25,
    paddingBottom: 25,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  }),
  innerContainer: style({
    maxWidth: 1440,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  }),
  itemContainer: style({
    display: 'flex',
    alignItems: 'center',
  }),
};
