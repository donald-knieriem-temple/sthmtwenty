/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
var section = require('../../../templates/components/section/section.twig');
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
//import Edit from './edit';
//import Save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'sthm/section', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Section', 'sthm' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'Page Section ', 'sthm' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'sthm',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'editor-insertmore',

    attributes: {
        background: { //use dropdown component
            type: 'string',
            default: 'uk-section-default',
        },
    },

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * @see ./edit.js
	 */
	edit: ( props ) => {
		const backgroundOptions = [
			{ label: __( 'Default' ), value: 'uk-section-default'},
			{ label: __( 'Muted' ), value: 'uk-section-muted'},
			{ label: __( 'Primary' ), value: 'uk-section-primary'},
			{label: __( 'Secondary' ), value: 'uk-section-secondary'},
		];

		var { 
			className, 
			classList,
			attributes: { background },
			setAttributes,
		} = props;

		//console.log(classList);
		//console.log(className);

		//className += ' uk-section ' + ( background ? background : '' );

		return (
			<>
				<div className={ "uk-section " + background }>Section:
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
	},

	/**
	 * @see ./save.js
	 */
	save: ( props ) => {
		var { 
			className, 
			attributes: { background },
			setAttributes,
		} = props;
		//console.log("on save: " + className);
		//className += ' uk-section ' + ( background ? background : '' );
		
		return (
			<div class={ "uk-section " + background }>
				<InnerBlocks.Content />
			</div>
		);
	}

} );
