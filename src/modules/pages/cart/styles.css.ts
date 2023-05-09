import { style } from '@vanilla-extract/css';
import { vars } from 'modules/styles/styles.css';

export const cartsStyle = {
  imageContainer: style({
    width: '100px',
    height: '100px',
    borderRadius: 8,
    padding: 1,
    position: 'relative',
    overflow: 'hidden',
  }),
  weight400: style({
    fontWeight: 400,
  }),
  button: style({
    flex: 1,
    width: '100%',
    borderRadius: '10px !important',
  }),
  summaryContainer: style({
    flex: 1,
    maxWidth: '280px',
    border: `1px solid ${vars.color.neutral2}`,
  }),
  summaryContainerContent: style({
    padding: 16,
  }),
  summaryHeader: style({
    backgroundColor: vars.color.primary1,
    paddingTop: 6,
    paddingBottom: 6,
  }),
};
