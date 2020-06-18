import { create } from '@storybook/theming/create';
import image from '../static/sthm-logo-black.png';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'STHM Twenty Theme',
  brandUrl: 'https://donald-knieriem-temple.github.io/sthmtwenty/',
  brandImage: image,
});