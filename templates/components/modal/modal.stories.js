import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import modal from './modal.twig'

import modalScss from './modal.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const footerAlign = {
	Left: 'uk-text-left',
	Center: 'uk-text-center',
	Right: 'uk-text-right',
};

storiesOf('Components|Modal', module)
.addDecorator(story => `<p uk-margin>
    <a class="uk-button uk-button-default" href="#modal-test" uk-toggle>Toggle Modal</a></p>
  ${story()}`)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	modal({
		id: 'modal-test',
		title: 'Default',
		closeOutside: boolean( 'Close Button Outside', false ), 
		header: boolean( 'Header', true ),
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
		vertical: boolean( 'Center Vertically', true )
}))
.add('With Footer', () => 
	modal({
		id: 'modal-test',
		title: 'Default',
		closeOutside: boolean( 'Close Button Outside', false ), 
		header: boolean( 'Header', true ),
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
		footer: { 
			align: select('Footer Align', footerAlign, 'uk-text-right' ), 
			body: '<p>Footer Body</p>' 
		},
		vertical: boolean( 'Center Vertically', true )
}))
.add('Close External', () => 
	modal({
		id: 'modal-test',
		title: 'Default', 
		closeOutside: boolean( 'Close Button Outside', true ),
		header: boolean( 'Header', true ),
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
		vertical: boolean( 'Center Vertically', true )
}))