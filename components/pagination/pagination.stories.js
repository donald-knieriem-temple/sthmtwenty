import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import pagination from './pagination.twig'

import paginationScss from './pagination.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const pageType = {
	Full: 'full',
	NumbersOnly: 'numbers',
	PrevNext: 'prevnext',
};

storiesOf('Components|Pagination', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Full', () => 
	pagination({
		classes: [
		'uk-flex-center',
		],
		type: select('Type', pageType, 'full'),
		pagination: {
			'next': { link: '#' },
			'pages': [
			{
				link: '#1',
				title: '1',
				class: '',
				current: true,
			},
			{
				link: '#2',
				title: '2',
				class: '',
			},
			{
				link: '#3',
				title: '3',
				class: '',
			},		
			{
				link: '#4',
				title: '4',
				class: '',
			},
			{
				link: '#5',
				title: '5',
				class: '',
			},										
			]
		},
}))
.add('Numbers', () => 
	pagination({
		classes: [
		'uk-flex-center',
		],
		type: select('Type', pageType, 'numbers'),
		pagination: {
			'prev': { link: '#' },
			'next': { link: '#' },
			'pages': [
			{
				link: '#',
				title: '1',
				class: '',
				current: true,
			},
			{
				link: '#',
				title: '2',
				class: '',
			},
			{
				link: '#',
				title: '3',
				class: '',
			},		
			{
				link: '#',
				title: '4',
				class: '',
			},
			{
				link: '#',
				title: '5',
				class: '',
			},										
			]
		},
}))
.add('Previous / Next', () => 
	pagination({
		classes: [
		'uk-flex-center',
		],
		type: select('Type', pageType, 'prevnext'),
		pagination: {
			'prev': { link: '#' },
			'next': { link: '#' },
			'pages': [
			{
				link: '#',
				title: '1',
				class: '',
				current: true,
			},
			{
				link: '#',
				title: '2',
				class: '',
			},
			{
				link: '#',
				title: '3',
				class: '',
			},		
			{
				link: '#',
				title: '4',
				class: '',
			},
			{
				link: '#',
				title: '5',
				class: '',
			},										
			]
		},
}))