/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, withColors, getColorClassName } from '@wordpress/block-editor';
import Grid from '../../../templates/components/grid/grid.js';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const Save = ( props ) => {

	var { 
		className, 
		attributes: { divider, gap, match, childWidthS, childWidthM, childWidthL, childWidthXL },
		setAttributes,
	} = props;
	
	return (
		<Grid divider={ divider } gap={ gap } match={ match } childWidthS={ childWidthS } 
			childWidthM={ childWidthM } childWidthL={ childWidthL } childWidthXL={ childWidthXL }>
			<InnerBlocks.Content />
		</Grid>
	);
}

export default Save;