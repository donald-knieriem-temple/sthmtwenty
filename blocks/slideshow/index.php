<?php
/**
 * Plugin Name:     Slideshow
 * Description:     Slideshow
 * Version:         0.1.0
 * Author:          The WordPress Contributors
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
function sthm_slideshow_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	//$script_dir = "$dir/build/";
	$script_dir_uri = get_stylesheet_directory_uri() . "/blocks/slideshow/";
	// error_log("Asset Path: {$script_asset_path}" );
	// error_log("Script Dir: {$script_dir}");
	// error_log("Script Dir URI: {$script_dir_uri}");

	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "sthm/slideshow" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'sthm-slideshow-block-editor',
		$script_dir_uri . $index_js,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/style-index.css';
	wp_register_style(
		'sthm-slideshow-block-editor',
		$script_dir_uri . $editor_css,
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'sthm-slideshow-block',
		$script_dir_uri . $style_css,
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'sthm/slideshow', array(
		'editor_script' => 'sthm-slideshow-block-editor',
		'editor_style'  => 'sthm-slideshow-block-editor',
		'style'         => 'sthm-slideshow-block',
	) );
}

//add_action( 'init', 'sthm_slideshow_block_init' );
sthm_slideshow_block_init();