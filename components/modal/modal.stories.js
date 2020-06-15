import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import modal from './modal.twig'

import modalScss from './modal.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-card-default',
	Primary: 'uk-card-primary',
	Secondary: 'uk-card-secondary',
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
		header: true,
		body: '<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit.</p>',
		footer: { align: 'uk-text-right', body: '<p>Footer Body</p>' },
		vertical: true
}));