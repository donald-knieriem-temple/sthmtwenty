/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import Slideshow from '../../../templates/components/slideshow/slideshow.js';

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
		attributes: { anchor, animation, autoplay, finite, ratio, minHeight, maxHeight },
		setAttributes,
	} = props;

	//console.log("on save: ", className, backgroundColor );
	
	return (
		<Slideshow anchor={ anchor } animation={ animation } autoplay={ autoplay } finite={ finite } ratio={ ratio } minHeight={ minHeight } maxHeight={ maxHeight }>
			<InnerBlocks.Content />
		</Slideshow>
	);
}

export default Save;