import { style } from '@vanilla-extract/css';
import { vars } from 'modules/styles/styles.css';

export const productDetailStyle = {
  separator: style({
    borderTop: `1px solid ${vars.color.neutral3}`,
    width: '100%',
  }),
  quantityInputContainer: style({
    backgroundColor: vars.color.neutral1,
    width: 'fit-content',
    height: 25,
    border: `2px solid ${vars.color.neutral2}`,
    borderRadius: 2,
  }),
  quantityInputButton: style({
    backgroundColor: vars.color.neutral1,
    border: 'none',
    cursor: 'pointer',
    width: 30,
    height: 25,
    ':active': {
      transform: 'translateY(1px)',
    },
  }),
  quantityInputText: style({
    width: 50,
    height: 25,
    borderRight: `2px solid ${vars.color.neutral2}`,
    borderLeft: `2px solid ${vars.color.neutral2}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  information: style({
    borderBottom: `3px solid ${vars.color.primary2}`,
    padding: '4px 10px',
  }),
};
