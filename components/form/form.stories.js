import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import form from './form.twig'

//import formScss from './form.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";


storiesOf('Components|Form', module)
.add('Sample', () => 
	form({
		title: 'Default', 
		subtitle: 'Default Subtitle goes here',
}));