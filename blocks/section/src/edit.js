/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import Section from '../../../templates/components/section/section.js';
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

export default function Edit( props ){

	var { 
		className, 
		classList,
		attributes: { background },
		setAttributes,
	} = props;

	const backgroundOptions = [
		{ label: __( 'Default' ), value: 'uk-section-default'},
		{ label: __( 'Muted' ), value: 'uk-section-muted'},
		{ label: __( 'Primary' ), value: 'uk-section-primary'},
		{label: __( 'Secondary' ), value: 'uk-section-secondary'},
	];

	return (
		<>
			<Section type={ background }>Section:
				<InnerBlocks />
			</Section>
			<InspectorControls>
			<PanelBody title={ __('Section Options', 'sthmtwenty') }>
			  <SelectControl
			    label={ __( 'Background' ) }
			    value={ background }
			    options={ backgroundOptions.map( ({ value, label }) => ( {
			    value: value,
			    label: label,
			    } ) ) }
			    onChange={ ( newBackground ) => setAttributes( { background: newBackground, } ) }
			   />
			</PanelBody>
			</InspectorControls>
		</>
	);
}