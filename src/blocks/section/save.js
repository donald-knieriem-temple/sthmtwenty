/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, withColors, getColorClassName } from '@wordpress/block-editor';
import Section from '../../../templates/components/section/section.js';

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
		attributes: { anchor, backgroundColor, backgroundId, backgroundUrl, videoId, videoUrl },
		setAttributes,
	} = props;

	//console.log("on save: ", className, backgroundUrl );
	
	return (
		<Section anchor={ anchor } bg={ backgroundColor ? backgroundColor : '' } backgroundImage={ backgroundUrl} backgroundVideo={ videoUrl }>
			<InnerBlocks.Content />
		</Section>
	);
}

export default Save;