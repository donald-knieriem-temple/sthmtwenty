import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import slideshow from './slideshow.twig'

import slideshowScss from './slideshow.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";

const animation = {
	Slide: 'slide',
	Fade: 'fade',
	Scale: 'scale',
	Pull: 'pull',
	Push: 'push',
};

const container = {
	Cover: 'cover',
	Overlay: 'overlay',

}
storiesOf('Components|Slideshow', module)
.add('Default', () => 
	slideshow({
		items: [
			{ src: 'https://placekitten.com/600/400', content: '<h1>Heading</h1><p>Content</p>', },
			{ src: 'https://placekitten.com/600/400', content: '', },
			{ src: 'https://placekitten.com/600/400', content: '', },
		],
		classes: [
				'uk-position-relative',
				'uk-visible-toggle',
				'uk-light',
			],
		animation: select('Animation', animation, 'slide'),
		autoplay: boolean('Autoplay', false),
		finite: boolean('Finite Scrolling', false),
		ratio: text('Ratio', '16:9'),
		minHeight: '',
		maxHeight: '',
		contentContainer: select('Content Container', container, 'cover'),
		viewport: boolean('Size to Viewport', false), //set slide height to full viewport
		nav: boolean('Nav Arrows', true), //prev/next arrows
		dotNav: boolean('Dot Nav', false), //dotnav at bottom
}))
.add('Overlay', () => 
	slideshow({
		items: [
			{ src: 'https://placekitten.com/600/400', content: '<h1>Heading</h1><p>Content</p>', },
			{ src: 'https://placekitten.com/600/400', content: '', },
			{ src: 'https://placekitten.com/600/400', content: '', },
		],
		classes: [
				'uk-position-relative',
				'uk-visible-toggle',
				'uk-light',
			],
		animation: select('Animation', animation, 'slide'),
		autoplay: boolean('Autoplay', false),
		finite: boolean('Finite Scrolling', false),
		ratio: text('Ratio', '16:9'),
		minHeight: '',
		maxHeight: '',
		contentContainer: select('Content Container', container, 'overlay'),
		viewport: boolean('Size to Viewport', false), //set slide height to full viewport
		nav: boolean('Nav Arrows', true), //prev/next arrows
		dotNav: boolean('Dot Nav', false), //dotnav at bottom
}))
.add('Fade Animation', () => 
	slideshow({
		items: [
			{ src: 'https://placekitten.com/600/400', content: '<h1>Heading</h1><p>Content</p>', },
			{ src: 'https://placekitten.com/600/400', content: '', },
			{ src: 'https://placekitten.com/600/400', content: '', },
		],
		classes: [
				'uk-position-relative',
				'uk-visible-toggle',
				'uk-light',
			],
		animation: select('Animation', animation, 'fade'),
		autoplay: boolean('Autoplay', false),
		finite: boolean('Finite Scrolling', false),
		ratio: text('Ratio', '16:9'),
		minHeight: '',
		maxHeight: '',
		contentContainer: select('Content Container', container, 'cover'),
		viewport: boolean('Size to Viewport', false), //set slide height to full viewport
		nav: boolean('Nav Arrows', true), //prev/next arrows
		dotNav: boolean('Dot Nav', false), //dotnav at bottom
}))

