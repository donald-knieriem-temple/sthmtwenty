import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

import heading from './heading.twig'

import headingScss from './heading.scss'

import "../../src/scripts/uikit.min.js";
import "../../src/styles/uikit/dist/css/uikit.min.css";

const sizeOptions = {
	Default: '',
	Small: 'uk-heading-small',
	Medium: 'uk-heading-medium',
	Large: 'uk-heading-large',
	XLarge: 'uk-heading-xlarge',
	XXLarge: 'uk-heading-2xlarge',
};

const textAlignOptions = {
	Left: 'uk-text-left',
	Center: 'uk-text-center',
	Right: 'uk-text-right',
}

storiesOf('Components|Heading', module)
.add('Default', () => 
	heading({
		bullet: boolean( 'Heading Bullet', false ),
		divider: boolean( 'Heading Divider', false ),
		line: boolean( 'Heading Line', false ),
		text: 'Default', 
		level: number( 'Level', 1, { range: true, min: 1, max: 6, step: 1} ),
		size: select( 'Size', sizeOptions, '' ),
		textAlign: select( 'Text Align', textAlignOptions, 'uk-text-left' ),
}))
.add('Bullet', () => 
	heading({
		bullet: boolean( 'Heading Bullet', true ),
		divider: boolean( 'Heading Divider', false ),
		line: boolean( 'Heading Line', false ),
		text: 'Default', 
		level: number( 'Level', 1, { range: true, min: 1, max: 6, step: 1} ),
		size: select( 'Size', sizeOptions, '' ),
		textAlign: select( 'Text Align', textAlignOptions, 'uk-text-left' ),
}))
.add('Divider', () => 
	heading({
		bullet: boolean( 'Heading Bullet', false ),
		divider: boolean( 'Heading Divider', true ),
		line: boolean( 'Heading Line', false ),
		text: 'Default', 
		level: number( 'Level', 1, { range: true, min: 1, max: 6, step: 1} ),
		size: select( 'Size', sizeOptions, '' ),
		textAlign: select( 'Text Align', textAlignOptions, 'uk-text-left' ),
}))
.add('Line', () => 
	heading({
		bullet: boolean( 'Heading Bullet', false ),
		divider: boolean( 'Heading Divider', false ),
		line: boolean( 'Heading Line', true ),
		text: 'Default', 
		level: number( 'Level', 1, { range: true, min: 1, max: 6, step: 1} ),
		size: select( 'Size', sizeOptions, '' ),
		textAlign: select( 'Text Align', textAlignOptions, 'uk-text-center' ),
}))