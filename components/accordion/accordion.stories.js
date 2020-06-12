import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import accordion from './accordion.twig'

import accordionScss from './accordion.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Accordion', module)
.addDecorator(withKnobs)
.add('Default', () => 
	accordion({
		open: number('Open Item', 0),
		items: [
			{
				title: 'Item 1',
				content: '<p>Item 1 content</p>'
			},
			{
				title: 'Item 2',
				content: '<p>Item 2 content</p>'
			},
			{
				title: 'Item 3',
				content: '<p>Item 3 content</p>'
			}
		]
	}))
.add('First Open', () => 
	accordion({
		open: number('Open Item', 1),
		items: [
			{
				title: 'Item 1',
				content: '<p>Item 1 content</p>'
			},
			{
				title: 'Item 2',
				content: '<p>Item 2 content</p>'
			},
			{
				title: 'Item 3',
				content: '<p>Item 3 content</p>'
			}
		]
	}))