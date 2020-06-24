<?php
/**
 * Plugin Name: Section Block
 * Description: Section block groups multiple blocks into one uikit section
 * Author: donald-knieriem-temple
 * Author URI: github.com/donald-knieriem-temple
 * Text Domain: sthm
 * Version: 0.1.0
 */

// creating a variable for our js file path
$block_path = '/sthm-section.js';
// registering the editor script that contains our blocks
wp_register_script(
    'sthm-section',
    plugins_url( $block_path , __FILE__ ),
    [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
    filemtime( plugin_dir_path( $block_path , __FILE__ ) )
);