import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import section from './section.twig'

import sectionScss from './section.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-section-default',
	Muted: 'uk-section-muted',
	Primary: 'uk-section-primary',
	Secondary: 'uk-section-secondary',
};

storiesOf('Components|Section', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	section({
		type: select('Type', types, 'uk-section-default'),
		body: '<div class="uk-container"><p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p></div>',
}))
.add('Muted', () => 
	section({
		type: select('Type', types, 'uk-section-muted'),
		body: '<div class="uk-container"><p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p></div>',
}))
.add('Primary', () => 
	section({
		type: select('Type', types, 'uk-section-primary'),
		body: '<div class="uk-container"><p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p></div>',
}))
.add('Secondary', () => 
	section({
		type: select('Type', types, 'uk-section-secondary'),
		body: '<div class="uk-container"><p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p></div>',
}));