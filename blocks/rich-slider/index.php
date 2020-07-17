<?php
/**
 * Plugin Name:     Rich Slider
 * Description:     A Rich-content slider 
 * Version:         0.1.0
 * Author:          Don Knieriem
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     sthm
 *
 * @package         sthm
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function sthm_rich_slider_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	$script_dir_uri = get_stylesheet_directory_uri() . "/blocks/rich-slider/";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "sthm/rich-slider" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'sthm-rich-slider-block-editor',
		$script_dir_uri . $index_js,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'sthm-rich-slider-block-editor',
		$script_dir_uri . $editor_css,
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'sthm-rich-slider-block',
		$script_dir_uri . $style_css,
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'sthm/rich-slider', array(
		'editor_script' => 'sthm-rich-slider-block-editor',
		'editor_style'  => 'sthm-rich-slider-block-editor',
		'style'         => 'sthm-rich-slider-block',
	) );
}
//add_action( 'init', 'sthm_rich_slider_block_init' );
sthm_rich_slider_block_init();