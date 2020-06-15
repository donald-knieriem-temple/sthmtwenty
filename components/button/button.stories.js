import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import buttonTwig from './button.twig'

import buttonScss from './button.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const button_types = {
	Default: 'uk-button-default',
	Primary: 'uk-button-primary',
	Secondary: 'uk-button-secondary',
	Danger: 'uk-button-danger',
	Text: 'uk-button-text',
	Link: 'uk-button-link'	
};

const b_type = select('Type', button_types, 'uk-button-default');

storiesOf('Components|Button', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	buttonTwig({
		label: 'Default Button', 
		type: select('Type', button_types, 'uk-button-default'),
		href: '',
		disabled: false
	}))

.add('Disabled', () => buttonTwig({
	label: 'Disabled Button',
	type: select('Type', button_types, 'uk-button-default'),
	href: '',
	disabled: true
}));