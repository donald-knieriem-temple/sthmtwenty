/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, withColors, getColorClassName } from '@wordpress/block-editor';
import GridItem from '../../../templates/components/griditem/griditem.js';

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
		attributes: { backgroundColor, padding, widthS, widthM, widthL, widthXL },
		setAttributes,
	} = props;

	
	return (
		<GridItem widthS={ widthS } 
			widthM={ widthM } widthL={ widthL } widthS={ widthXL } bg={ backgroundColor ? backgroundColor : '' } padding={ padding ? padding : '' } >
			<InnerBlocks.Content />
		</GridItem>
	);
}

export default Save;