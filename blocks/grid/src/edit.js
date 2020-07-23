/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, withColors, PanelColorSettings } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import Grid from '../../../templates/components/grid/grid.js';
import { compose } from '@wordpress/compose';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import '../../../templates/components/grid/grid.scss';
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
		attributes: { divider, gap, match, childWidthS, childWidthM, childWidthL, childWidthXL },
		setAttributes,
	} = props;

	const ALLOWED_BLOCKS = [ 'sthm/griditem' ];

		const widthOptions = [
		{ label: __( 'Default' ), value: ''},
		{ label: __( '1-1' ), value: 'uk-child-width-1-1'},
		{ label: __( '1-2' ), value: 'uk-child-width-1-2'},
		{ label: __( '1-3' ), value: 'uk-child-width-1-3'},
		{ label: __( '2-3' ), value: 'uk-child-width-2-3'},
		{ label: __( '1-4' ), value: 'uk-child-width-1-4'},
		{ label: __( '3-4' ), value: 'uk-child-width-3-4'},
		{ label: __( '1-5' ), value: 'uk-child-width-1-5'},
		{ label: __( '2-5' ), value: 'uk-child-width-2-5'},
		{ label: __( '3-5' ), value: 'uk-child-width-3-5'},
		{ label: __( '4-5' ), value: 'uk-child-width-4-5'},
		{ label: __( '1-6' ), value: 'uk-child-width-1-6'},
		{ label: __( '5-6' ), value: 'uk-child-width-5-6'},
	];
	
	return (
		<>
			<Grid divider={ divider } gap={ gap } match={ match } childWidthS={ childWidthS } 
				childWidthM={ childWidthM } childWidthL={ childWidthL } childWidthXL={ childWidthXL }>Grid
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</Grid>
			<InspectorControls>
				<PanelBody title={ __('Grid Options', 'sthmtwenty') }>
					<SelectControl
					    label={ __( 'Width @S' ) }
					    value={ childWidthS }
					    options={ widthOptions.map( ({ value, label }) => ( {
					    value: value,
					    label: label,
					    } ) ) }
					    onChange={ ( newWidth ) => setAttributes( { childWidthS: newWidth, } ) }
				   	/>
					<SelectControl
					    label={ __( 'Width @M' ) }
					    value={ childWidthM }
					    options={ widthOptions.map( ({ value, label }) => ( {
					    value: value,
					    label: label,
					    } ) ) }
					    onChange={ ( newWidth ) => setAttributes( { childWidthM: newWidth, } ) }
				   	/>
					<SelectControl
					    label={ __( 'Width @L' ) }
					    value={ childWidthL }
					    options={ widthOptions.map( ({ value, label }) => ( {
					    value: value,
					    label: label,
					    } ) ) }
					    onChange={ ( newWidth ) => setAttributes( { childWidthL: newWidth, } ) }
				   	/>
					<SelectControl
					    label={ __( 'Width @XL' ) }
					    value={ childWidthXL }
					    options={ widthOptions.map( ({ value, label }) => ( {
					    value: value,
					    label: label,
					    } ) ) }
					    onChange={ ( newWidth ) => setAttributes( { childWidthXL: newWidth, } ) }
				   	/>			   				   				   	
				</PanelBody>
				</InspectorControls>
			</>
	);
}

export default Edit;