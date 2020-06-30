import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import slidenav from './slidenav.twig'

import slidenavScss from './slidenav.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Slide Nav', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Default', () => 
	slidenav({
		large: boolean('Large', false),
		hover: boolean('Hide on Hover', false),
		positionPrev: [],
		positionNext: [],
}));
storiesOf('Components|Slide Nav', module)
.addDecorator(story => `<div class="uk-position-relative uk-light" uk-slideshow>
    <ul class="uk-slideshow-items">
        <li>
            <img src="https://placekitten.com/600/400?image=1" alt="" uk-cover>
        </li>
        <li>
            <img src="https://placekitten.com/600/400?image=2" alt="" uk-cover>
        </li>
        <li>
            <img src="https://placekitten.com/600/400?image=3" alt="" uk-cover>
        </li>
    </ul>${story()}</div>`)
.add('As Overlay', () => 
	slidenav({
		large: boolean('Large', false),
		hover: boolean('Hide on Hover', false),
		positionPrev: [
		'uk-position-center-left',
		'uk-position-small'
		],
		positionNext: [
		'uk-position-center-right',
		'uk-position-small'
		],
}));