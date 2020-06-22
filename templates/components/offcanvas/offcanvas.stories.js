import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import offcanvas from './offcanvas.twig'

import offcanvasScss from './offcanvas.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Offcanvas', module)
.addDecorator(story => `<a href="#test-offcanvas" uk-toggle>Open</a>${story()}`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	offcanvas({
		id: 'test-offcanvas',
		close: true,
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
.add('Overlay', () => 
	offcanvas({
		id: 'test-offcanvas',
		close: true,
		overlay: true,
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
.add('No Close', () => 
	offcanvas({
		id: 'test-offcanvas',
		close: false,
		overlay: true,
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
}))
