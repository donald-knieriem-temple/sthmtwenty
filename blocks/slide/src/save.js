/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import SlideshowItem from '../../../templates/components/slideshow/slide.js';

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
		attributes: { mediaId, mediaUrl },
		setAttributes,
	} = props;

	//console.log("on save: ", className, backgroundColor );
	
	return (
		<SlideshowItem mediaUrl={ mediaUrl }>
			<InnerBlocks.Content />
		</SlideshowItem>
	);
}

export default Save;