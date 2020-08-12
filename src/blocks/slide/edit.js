/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl, Button, ResponsiveWrapper } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import SlideshowItem from '../../../templates/components/slideshow/slide.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';
//import '../../../templates/components/slideshow/slideshow.scss';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

const Edit = ( props ) => {

	var { 
		className, 
		classList,
		attributes: { mediaId, mediaUrl },
		setAttributes,
	} = props;

	const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/heading', 'core/button' ];

	return (
		<>
			<SlideshowItem mediaUrl={ mediaUrl }>
				<InnerBlocks />
			</SlideshowItem>
			<InspectorControls>
			<PanelBody title={ __('Slide Options', 'sthmtwenty') }>

			</PanelBody>

			</InspectorControls>
		</>
	);
}

export default Edit;