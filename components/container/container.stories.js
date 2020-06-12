import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import container from './container.twig'

import containerScss from './container.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const sizes = {
	xsmall: 'uk-container-xsmall',
	small: 'uk-container-small',
	large: 'uk-container-large',
	xlarge: 'uk-container-xlarge',
	full: 'uk-container-expand'
};

const backgrounds = {
	default: 'uk-background-default',
	muted: 'uk-background-muted',
	primary: 'uk-background-primary',
	secondary: 'uk-background-secondary',
}

storiesOf('Components|Container', module)
.addDecorator(story => `<div class="uk-section uk-section-muted">${story()}</div>`)
.add('Default', () => 
	container({
		size: select('Size', sizes, 'uk-container-expand'),
		background: select('Background', backgrounds, 'uk-background-default'),
		contents: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}));