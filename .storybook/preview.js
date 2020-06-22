import { addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);

// wrap each story in a uikit section and container for default spacing
addDecorator( story => 
`<div class="uk-section uk-margin uk-margin-left uk-margin-right">
		${story()}
</div><!-- /.uk-section -->`
);

// add generic device viewport options

const customViewports = {
	small: {
		name: 'Small (360)',
		styles: { 
			width: '360px',
			height: '640px',
		},
	},
	medium: {
		name: 'Medium (480)',
		styles: { 
			width: '480px',
			height: '640px',
		},
	},
	large: {
		name: 'Large (768)',
		styles: { 
			width: '768px',
			height: '640px',
		},
	},
	xl: {
		name: 'XL (960)',
		styles: { 
			width: '960px',
			height: '640px',
		},
	},
	xxl: {
		name: 'XXL (1200)',
		styles: { 
			width: '1200px',
			height: '640px',
		},
	},
}

addParameters({ 
	chromatic: { viewports: [360, 480, 768, 960, 1200] },
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...customViewports,
		},
	},
});