import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import siteHeader from './site-header.twig'

import siteHeaderScss from './site-header.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Template Parts|Template Parts', module)
.addDecorator(story => `<div class="uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid>
    <div>${story()}</div></div>`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Site Header', () => 
	siteHeader({
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
}));