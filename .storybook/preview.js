import { addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

addDecorator( story => 
`<div class="uk-section">
	<div class="uk-container">
		${story()}
	</div><!-- /.uk-container -->
</div><!-- /.uk-section -->`
);