import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import subnav from './subnav.twig'

import subnavScss from './subnav.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Subnav', module)
.addDecorator(story => `<div class="uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid>
    <div>${story()}</div></div>`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Tertiary style', () => 
	subnav({
		divider: true,
		skipActive: true,
		menu: {
			items: [
			{
				title: 'Item 1',
				link: '#',
			},
			{
				title: 'Item 2',
				link: '#',
			},
			{
				title: 'Item 3',
				link: '#',
			}
			],
		}, 
}))
.add('Subnav Style', () => 
	subnav({
		pill: true,
		menu: {
			items: [
			{
				title: 'Item 1',
				link: '#',
			},
			{
				title: 'Item 2',
				link: '#',
			},
			{
				title: 'Item 3',
				link: '#',
			}
			],
		}, 
}))