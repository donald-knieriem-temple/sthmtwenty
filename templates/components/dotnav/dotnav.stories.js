import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import dotnav from './dotnav.twig'

import dotnavScss from './dotnav.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

storiesOf('Components|Dotnav', module)
.addDecorator(story => `<div class="uk-position-relative">
${story()}</div>`)
.add('Default', () => 
	dotnav({
		position: [
			'uk-position-bottom-center',
			'uk-position-small'
		],
		items: [
			{
				active: true,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
		]
}));

storiesOf('Components|Dotnav', module)
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
	dotnav({
		position: [
			'uk-position-bottom-center',
			'uk-position-small'
		],
		attributeIndex: 'uk-slideshow-item',
		items: [
			{
				active: true,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
			{
				active: false,
				href: '#'
			},
		]
}));