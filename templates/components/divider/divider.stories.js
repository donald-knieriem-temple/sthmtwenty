import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import divider from './divider.twig'

import dividerScss from './divider.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Divider', module)
.addDecorator(story => 
	`<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>
	${story()}
	<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>`)
.add('Default', () => 
	divider({
		icon: boolean('Icon', false),
		small: boolean('Small', false), 
		vertical: boolean('Vertical', false) 
}))
.add('Icon', () => 
	divider({
		icon: boolean('Icon', true),
		small: boolean('Small', false),
		vertical: boolean('Vertical', false) 
}))
.add('Small', () => 
	divider({
		icon: boolean('Icon', false),
		small: boolean('Small', true), 
		vertical: boolean('Vertical', false) 
}))
.add('Vertical', () => 
	divider({
		icon: boolean('Icon', false), 
		small: boolean('Small', false), 
		vertical: boolean('Vertical', true) 
}));
