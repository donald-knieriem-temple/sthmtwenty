//import './style.scss';

import metadata from './block.json';

import Edit from './edit';
import Save from './save';

const { name, category, icon, title, description, attributes } = metadata;
const settings = {
	title,
	description,
	category,
	icon,
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes,
	edit: Edit,
	save: Save,
};

export { name, category, metadata, settings};