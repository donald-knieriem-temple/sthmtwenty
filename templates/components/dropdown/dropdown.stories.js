import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import dropdown from './dropdown.twig'

import dropdownScss from './dropdown.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Dropdown', module)
.add('Default', () => 
	dropdown({
		buttonLabel: 'Dropdown', 
		buttonType: 'uk-button-default',
		items: [
		{
			active: true,
			href: '#',
			title: 'Item 1'
		},
		{
			navHeader: true,
			href: '#',
			title: 'Header'
		},
		{
			href: '#',
			title: 'Item 2'
		},
		{
			href: '#',
			title: 'Item 3'
		},
		{
			divider: true
		},
		{
			href: '#',
			title: 'Item 4'
		}
		]
}))
.add('Click', () => 
	dropdown({
		buttonLabel: 'Click', 
		buttonType: 'uk-button-default',
		click: true,
		items: [
		{
			active: true,
			href: '#',
			title: 'Item 1'
		},
		{
			navHeader: true,
			href: '#',
			title: 'Header'
		},
		{
			href: '#',
			title: 'Item 2'
		},
		{
			href: '#',
			title: 'Item 3'
		},
		{
			divider: true
		},
		{
			href: '#',
			title: 'Item 4'
		}
		]
}))
