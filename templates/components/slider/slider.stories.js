import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import slider from './slider.twig'

import sliderScss from './slider.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-card-default',
	Primary: 'uk-card-primary',
	Secondary: 'uk-card-secondary',
};

storiesOf('Components|Slider', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	slider({
		widths: [ 
			'uk-child-width-1-2', 
			'uk-child-width-1-3@s', 
			'uk-child-width-1-4@m',
		],
		items: [
			{ img: 'https://placekitten.com/600/400'},
			{ body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',}
		],
		classes: [
			'uk-position-relative',
			'uk-visible-toggle',
			'uk-light',
		],
		nav: true,
}));