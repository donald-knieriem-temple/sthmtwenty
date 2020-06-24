import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { array, boolean, button, color, date, select, withKnobs, text, number } from '@storybook/addon-knobs';

//import card from './card.twig'

import typographyScss from './typography.scss'

import "../../../src/scripts/uikit.min.js";
import "../../../src/styles/uikit/dist/css/uikit.min.css";


storiesOf('Components|Typography', module)
/*.addDecorator(withActions('click', 'click uk-button'))*/
.add('Text', () => 
	"<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><p>Paragraph text. Let's make this longer. Lorem ipsum <a href=\"#\">dolor</a> sit amet, consectetur adipisicing elit. Lorem ipsum <a href=\"#\">dolor</a> sit amet, consectetur adipisicing elit.</p><p><strong>Strong text</strong></p><p><em>Emphasized Text</em></p>"
)
.add('Lists', () =>
	"<ul><li>Item 1</li><li>Item 2<ul><li>Item 1</li>            <li>Item 2                <ul>                    <li>Item 1</li>                    <li>Item 2</li>                </ul>            </li>        </ul>    </li>    <li>Item 3</li>    <li>Item 4</li></ul><ol><li>Item 1</li><li>Item 2<ul><li>Item 1</li>            <li>Item 2                <ul>                    <li>Item 1</li>                    <li>Item 2</li>                </ul>            </li>        </ul>    </li>    <li>Item 3</li>    <li>Item 4</li></ol>"
)
.add('Blockquote', () =>
	'<blockquote cite="#"><p class="uk-margin-small-bottom">The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element.</p><footer>Someone famous in <cite><a href="#">Source Title</a></cite></footer></blockquote>'
)