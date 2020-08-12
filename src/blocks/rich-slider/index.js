//import './style.scss';

import metadata from './block.json';

import Edit from './edit';
import Save from './save';

const { name, category, icon, title, description } = metadata;
const settings = {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title,
	description,
	category,
	icon,
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	edit: Edit,
	save: Save,
};

export { name, category, metadata, settings};
