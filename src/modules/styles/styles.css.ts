import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './colors';
export { style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color,
});
