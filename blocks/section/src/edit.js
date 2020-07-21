/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, withColors, PanelColorSettings } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import Section from '../../../templates/components/section/section.js';
import { compose } from '@wordpress/compose';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import '../../../templates/components/section/section.scss';
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
		attributes: { anchor },
		setAttributes,
		backgroundColor,
		setBackgroundColor
	} = props;

	console.log("on edit: ", backgroundColor)

	return (
		<>
			<Section className={ backgroundColor && backgroundColor.slug ? "bg-" + backgroundColor.slug : '' } anchor={ anchor }>Section #{ anchor }: { backgroundColor && backgroundColor.slug ? "bg-" + backgroundColor.slug : "No Background Color" }
				<InnerBlocks />
			</Section>
			<InspectorControls>
			<PanelBody title={ __('Section Options', 'sthmtwenty') }>
				<TextControl
					label={ __( 'Anchor' ) }
					value={ anchor }
					onChange={ ( newAnchor ) => setAttributes( { anchor: newAnchor, } ) }
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