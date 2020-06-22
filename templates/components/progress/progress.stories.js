import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import progress from './progress.twig'

import progressScss from './progress.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const types = {
	Default: 'uk-default',
	Primary: 'uk-primary',
	Secondary: 'uk-secondary',
};

storiesOf('Components|Progress', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	progress({
		id: 'default', 
		type: select('Type', types, 'uk-default'),
		value: number('Value', 25, 100),
		max: number('Max', 100),
}))
.add('Primary', () => 
	progress({
		id: 'default', 
		type: select('Type', types, 'uk-primary'),
		value: number('Value', 25, 100),
		max: number('Max', 100),
}))
.add('Secondary', () => 
	progress({
		id: 'default', 
		type: select('Type', types, 'uk-secondary'),
		value: number('Value', 25, 100),
		max: number('Max', 100),
}));