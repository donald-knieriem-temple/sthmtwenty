/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import Slideshow from '../../../templates/components/slideshow/slideshow.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
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
		attributes: { anchor, animation, autoplay, finite, ratio, minHeight, maxHeight },
		setAttributes,
	} = props;

	const ALLOWED_BLOCKS = [ 'sthm/slide' ];

	const animationOptions = [
		{ label: __( 'Slide (Default)' ), value: ''},
		{ label: __( 'Fade' ), value: 'fade'},
		{ label: __( 'Scale' ), value: 'scale'},
		{ label: __( 'Pull' ), value: 'pull'},
		{ label: __( 'Push' ), value: 'push'},
	];
	return (
		<>
			<Slideshow
			anchor={ anchor } animation={ animation } autoplay={ autoplay }
			finite={ finite } ratio={ ratio } minHeight={ minHeight } maxHeight={ maxHeight }>
				Slideshow #{ anchor }
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</Slideshow>
			<InspectorControls>
			<PanelBody title={ __('Slideshow Options', 'sthmtwenty') }>
				<TextControl
					label={ __( 'Anchor' ) }
					value={ anchor }
					onChange={ ( newAnchor ) => setAttributes( { anchor: newAnchor, } ) }
				/>
				<SelectControl
					label={ __( 'Animation' ) }
					value={ animation }
					options={ animationOptions.map( ({ value, label }) => ( {
					    value: value,
					    label: label,
				    } ) ) }
				    onChange={ ( newAnimation ) => setAttributes( { animation: newAnimation, } ) }
				/>
				<ToggleControl
			        label={ __( 'Autoplay' ) }
			        help={ autoplay ? 'Will autoplay' : 'Will not autoplay' }
			        checked={ autoplay }
			        onChange={ ( newAutoplay ) => setAttributes( { autoplay: newAutoplay, } ) }
			    />
				<ToggleControl
			        label={ __( 'Finite Scrolling' ) }
			        help={ finite ? 'Will stop scrolling' : 'Infinite scrolling' }
			        checked={ finite }
			        onChange={ ( newFinite ) => setAttributes( { finite: newFinite, } ) }
			    />
			    <TextControl
					label={ __( 'Ratio' ) }
					value={ ratio }
					onChange={ ( newRatio ) => setAttributes( { ratio: newRatio, } ) }
				/>
				<TextControl
					label={ __( 'Minimum Height' ) }
					value={ minHeight }
					onChange={ (newMinHeight ) => setAttributes( { minHeight: newMinHeight, } ) }
				/>
				<TextControl
					label={ __( 'Maximum Height' ) }
					value={ maxHeight }
					onChange={ (newMaxHeight ) => setAttributes( { maxHeight: newMaxHeight, } ) }
				/>
			</PanelBody>

			</InspectorControls>
		</>
	);
}

export default Edit;