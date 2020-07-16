/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
var section = require('../../../templates/components/section/section.twig');
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

export default function 
	
/*export default function Edit( { attributes, setAttributes, className, isSelected } ) {
	const { background } = attributes;

	const backgroundOptions = [
		{ label: __( 'Default' ), value: 'uk-section-default'},
		{ label: __( 'Muted' ), value: 'uk-section-muted'},
		{ label: __( 'Primary' ), value: 'uk-section-primary'},
		{label: __( 'Secondary' ), value: 'uk-section-secondary'},
	];

	const output = section({type: background, body: InnerBlocks.Content() });
	console.log(output);
	console.log(InnerBlocks.Content());
	return (
		<>Section:
			<div className={`uk-section ${ background }`}>
				<InnerBlocks />
			</div>
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
}*/
