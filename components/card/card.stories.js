import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import card from './card.twig'

import cardScss from './card.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-card-default',
	Primary: 'uk-card-primary',
	Secondary: 'uk-card-secondary',
};

storiesOf('Components|Card', module)
.addDecorator(story => `<div class="uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid>
    <div>${story()}</div></div>`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	card({
		title: 'Default', 
		type: select('Type', types, 'uk-card-default'),
		body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
		hover: boolean('Hover', false)
}))
.add('Primary', () => 
	card({
		title: 'Primary', 
		type: select('Type', types, 'uk-card-primary'),
		body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
		hover: boolean('Hover', false)
}))
.add('Secondary', () => 
	card({
		title: 'Secondary', 
		type: select('Type', types, 'uk-card-secondary'),
		body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
		hover: boolean('Hover', false)
}));