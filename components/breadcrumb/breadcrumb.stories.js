import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import accordion from './breadcrumb.twig'

import accordionScss from './breadcrumb.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Breadcrumb', module)
.addDecorator(withKnobs)
.add('Default', () => 
	accordion({
		items: [
			{
				title: 'Item 1',
				href: '#'
			},
			{
				title: 'Item 2',
				href: '#'
			},
			{
				title: 'Disabled',
				href: '#',
				disabled: true
			},
			{
				title: 'Active',
				active: true
			}
		]
	}));