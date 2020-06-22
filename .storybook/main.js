module.exports = {
  stories: [
  '../templates/**/*.stories.js',
  '../blocks/**/*.stories.js'
  ],
  addons: [
  '@storybook/addon-knobs/register',
  '@storybook/addon-actions/register',
  '@storybook/addon-storysource',
  '@storybook/addon-a11y/register',
  'storybook-readme/register',
  '@storybook/addon-viewport/register'
  ]
};
