import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import navbar from './navbar.twig'

import navbarScss from './navbar.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-card-default',
	Primary: 'uk-card-primary',
	Secondary: 'uk-card-secondary',
};

storiesOf('Components|Navbar', module)
.add('Default', () => 
	navbar({
		menu: {
			items: [
			{
				title: 'Menu with Current Page',
				link: '#',
				current_item_ancestor: true,
				children: [
					{ 
						title: 'Child 1',
						link: '#',
					},
					{ 
						title: 'Current Page',
						link: '#',
						current: true,
					},
					{
						title: 'Divider',
						link: '#',
						classes: [ 'uk-nav-divider' ],
					},
					{ 
						title: 'Child 3',
						link: '#',
					},
				],
			},
			{
				title: 'Menu 2',
				link: '#',
				children: [
					{ 
						title: 'Child 1',
						link: '#',
					},
					{ 
						title: 'Child 2',
						link: '#',
					},
				],
			},
			{
				title: 'Single Link',
				link: '#',
			}
			],
		}, 
}));