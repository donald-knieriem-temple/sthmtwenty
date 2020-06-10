module.exports = {
  stories: [
  '../stories/**/*.stories.js',
  '../templates/**/*.stories.js',
  '../components/**/*.stories.js'
  ],
  addons: [
  '@storybook/addon-knobs/register',
  '@storybook/addon-actions/register',
  '@storybook/addon-storysource',
  '@storybook/addon-a11y/register',
  'storybook-readme/register'
  ]
};
