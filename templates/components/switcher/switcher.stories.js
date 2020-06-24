import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import switcher from './switcher.twig'

import switcherScss from './switcher.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const switcherTypes = {
	Pills: 'uk-pills',
	Tabs: 'uk-tabs',
	Buttons: 'uk-buttons',
};

storiesOf('Components|Switcher', module)
.add('Default', () => 
	switcher({
		type: select('Type', switcherTypes, 'uk-pills'),
		items: [
			{
				title: 'Item 1',
				body: '<p>This is item 1. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 2',
				body: '<p>This is item 2. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 3',
				body: '<p>This is item 3. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
		]
}))
.add('Tabs', () => 
	switcher({
		type: select('Type', switcherTypes, 'uk-tabs'),
		items: [
			{
				title: 'Item 1',
				body: '<p>This is item 1. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 2',
				body: '<p>This is item 2. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 3',
				body: '<p>This is item 3. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
		]
}))
.add('Buttons', () => 
	switcher({
		type: select('Type', switcherTypes, 'uk-buttons'),
		items: [
			{
				title: 'Item 1',
				body: '<p>This is item 1. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 2',
				body: '<p>This is item 2. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
			{
				title: 'Item 3',
				body: '<p>This is item 3. Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
			},
		]
}))