import { style } from '@vanilla-extract/css';
import { vars } from 'modules/styles/styles.css';

export const helpStyles = {
  container: style({
    display: 'flex',
  }),
  title: style({
    borderBottom: `1px solid ${vars.color.neutral5} `,
  }),
  button: style({
    padding: '12px 20px',
    borderBottom: `1px solid ${vars.color.neutral5} `,
    width: 'fit-content',
    textDecoration: 'none',
  }),
};
