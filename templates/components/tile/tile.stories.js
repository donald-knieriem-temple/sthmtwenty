import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import tile from './tile.twig'

import tileScss from './tile.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const tileTypes = {
	Default: 'uk-tile-default',
	Muted: 'uk-tile-muted',
	Primary: 'uk-tile-primary',
	Secondary: 'uk-tile-secondary',
};

const tilePadding = {
	None: '',
	Default: 'uk-padding',
	Small: 'uk-padding-small',
	Large: 'uk-padding-large',
	Remove: 'uk-padding-remove',
}

storiesOf('Components|Tile', module)
.addDecorator(story => `<div class="uk-child-width-1-2@s uk-grid-collapse uk-text-center" uk-grid>
    <div>${story()}</div></div>`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-default'),
		padding: select('Padding', tilePadding, 'uk-padding'),
		body: '<p>Default</p>',
}))
.add('Muted', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-muted'),
		padding: select('Padding', tilePadding, 'uk-padding'),
		body: '<p>Default</p>',
}))
.add('Primary', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-primary'),
		padding: select('Padding', tilePadding, 'uk-padding'),
		body: '<p>Default</p>',
}))
.add('Secondary', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-secondary'),
		padding: select('Padding', tilePadding, 'uk-padding'),
		body: '<p>Default</p>',
}))
.add('Small Padding', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-primary'),
		padding: select('Padding', tilePadding, 'uk-padding-small'),
		body: '<p>Default</p>',
}))
.add('Large Padding', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-primary'),
		padding: select('Padding', tilePadding, 'uk-padding-large'),
		body: '<p>Default</p>',
}))
.add('Remove Padding', () => 
	tile({
		type: select('Type', tileTypes, 'uk-tile-primary'),
		padding: select('Padding', tilePadding, 'uk-padding-remove'),
		body: '<p>Default</p>',
}))