/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, withColors, PanelColorSettings } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import GridItem from '../../../templates/components/griditem/griditem.js';
import { compose } from '@wordpress/compose';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
		attributes: { widthS, widthM, widthL, widthXL },
		backgroundColor,
		setBackgroundColor,
		setAttributes,
	} = props;

	const widthOptions = [
		{ label: __( 'Default' ), value: ''},
		{ label: __( '1-1' ), value: 'uk-width-1-1'},
		{ label: __( '1-2' ), value: 'uk-width-1-2'},
		{ label: __( '1-3' ), value: 'uk-width-1-3'},
		{ label: __( '2-3' ), value: 'uk-width-2-3'},
		{ label: __( '1-4' ), value: 'uk-width-1-4'},
		{ label: __( '3-4' ), value: 'uk-width-3-4'},
		{ label: __( '1-5' ), value: 'uk-width-1-5'},
		{ label: __( '2-5' ), value: 'uk-width-2-5'},
		{ label: __( '3-5' ), value: 'uk-width-3-5'},
		{ label: __( '4-5' ), value: 'uk-width-4-5'},
		{ label: __( '1-6' ), value: 'uk-width-1-6'},
		{ label: __( '5-6' ), value: 'uk-width-5-6'},
	];
	
	return (
		<>
			<GridItem widthS={ widthS } 
				widthM={ widthM } widthL={ widthL } widthXL={ widthXL } 
				className={ backgroundColor && backgroundColor.slug ? "bg-" + backgroundColor.slug : '' }>
				Grid Item: { backgroundColor && backgroundColor.slug ? "bg-" + backgroundColor.slug : "No Background Color" }
				<InnerBlocks />
			</GridItem>
			<InspectorControls>
			<PanelBody title={ __('Grid Item Options', 'sthmtwenty') }>
				<SelectControl
				    label={ __( 'Width @S' ) }
				    value={ widthS }
				    options={ widthOptions.map( ({ value, label }) => ( {
				    value: value,
				    label: label,
				    } ) ) }
				    onChange={ ( newWidth ) => setAttributes( { widthS: newWidth, } ) }
			   	/>
				<SelectControl
				    label={ __( 'Width @M' ) }
				    value={ widthM }
				    options={ widthOptions.map( ({ value, label }) => ( {
				    value: value,
				    label: label,
				    } ) ) }
				    onChange={ ( newWidth ) => setAttributes( { widthM: newWidth, } ) }
			   	/>
				<SelectControl
				    label={ __( 'Width @L' ) }
				    value={ widthL }
				    options={ widthOptions.map( ({ value, label }) => ( {
				    value: value,
				    label: label,
				    } ) ) }
				    onChange={ ( newWidth ) => setAttributes( { widthL: newWidth, } ) }
			   	/>
				<SelectControl
				    label={ __( 'Width @XL' ) }
				    value={ widthXL }
				    options={ widthOptions.map( ({ value, label }) => ( {
				    value: value,
				    label: label,
				    } ) ) }
				    onChange={ ( newWidth ) => setAttributes( { widthXL: newWidth, } ) }
			   	/>			   				   				   	
			</PanelBody>
			<PanelColorSettings
				title={ __('Color Settings') }
				colorSettings={[
				{
					value: backgroundColor.color,
					onChange: setBackgroundColor, 
					label: __('Section Background'),
				},
				]}
			/>
			</InspectorControls>
		</>
	);
}

export default compose( 
withColors( 'backgroundColor' ))( Edit );