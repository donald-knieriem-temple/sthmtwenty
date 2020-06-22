import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import container from './container.twig'

import containerScss from './container.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

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
.add('Default', () => 
	container({
		size: select('Size', sizes, 'uk-container-expand'),
		background: select('Background', backgrounds, 'uk-background-muted'),
		contents: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
.add('XSmall', () => 
	container({
		size: select('Size', sizes, 'uk-container-xsmall'),
		background: select('Background', backgrounds, 'uk-background-muted'),
		contents: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
.add('Large', () => 
	container({
		size: select('Size', sizes, 'uk-container-large'),
		background: select('Background', backgrounds, 'uk-background-muted'),
		contents: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
