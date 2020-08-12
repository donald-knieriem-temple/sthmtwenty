//import { registerBlockType } from '@wordpress/blocks';
const { registerBlockType, getCategories, setCategories } = wp.blocks;

//import { getCategories, setCategories, registerBlockCollection } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// Register Blocks
import * as grid from './blocks/grid';
import * as griditem from './blocks/griditem';
import * as richslider from './blocks/rich-slider';
import * as section from './blocks/section';
import * as slide from './blocks/slide';
import * as slideshow from './blocks/slideshow';

function registerBlockCategory(){

	const categories = getCategories();
	categories.unshift( {
		slug: 'sthm',
		title: 'STHM',
		icon: <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="m-.17-.17h120v120.28h-120z" fill="#a41e35"/><g fill="#fff"><path d="m19.56 12.98v32.62h6.99v-26.13h66.89v26.13h6.66v-32.62z"/><path d="m37.53 86.03v6.66h18.47v-65.06h-21.63v17.97h6.82v-11.16h7.99v51.59z"/><path d="m64.07 27.54v65.07h18.47v-6.66h-11.65v-51.59h7.99v11.24h6.83v-18.06h-14.82z"/><path d="m37.53 106.96h45.01v-6.58h-45.01z"/></g></svg>//'welcome-add-page',
	}, );
	console.log(categories);
	setCategories( categories );

}

const registerBlock = (block) => {
	if (!block) {
		return;
	}

	const newCategories = getCategories();
	console.log("registerBlock..", newCategories);
	const { name, settings } = block;
	const { category } = settings;

	console.log("registering ", name, "Category: " , settings['category'] );
	registerBlockType(name, {
		category,
		...settings,
	});
};

export const registerCoBlocksBlocks = () => {
	[grid, griditem, richslider, section, slide, slideshow].forEach(
		registerBlock
	);
};

console.log("Running blocks.js");
registerBlockCategory();
registerCoBlocksBlocks();
