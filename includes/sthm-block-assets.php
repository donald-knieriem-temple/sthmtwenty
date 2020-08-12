<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class STHM_Block_Assets {

	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return CoBlocks_Block_Assets
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new STHM_Block_Assets();
		}

		return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		//add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'editor_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_scripts' ) );
		//add_action( 'wp_enqueue_scripts', array( $this, 'frontend_scripts' ) );
	}

	/**
	 * Loads the asset file for the given script or style.
	 * Returns a default if the asset file is not found.
	 *
	 * @param string $filepath The name of the file without the extension.
	 *
	 * @return array The asset file contents.
	 */
	public function get_asset_file( $filepath ) {
		$asset_path = __DIR__ . $filepath . '.asset.php';

		return file_exists( $asset_path )
			? include $asset_path
			: array(
				'dependencies' => array(),
				'version'      => THEME_VERSION,
			);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets() {
		// Styles.
		$name       = 'index';
		$filepath   = 'build/' . $name;
		$asset_file = $this->get_asset_file( $filepath );
		$rtl        = ! is_rtl() ? '' : '-rtl';

		$result = wp_register_style(
			'sthm-editor',
			__DIR__ . $filepath . $rtl . '.css',
			array(),
			$asset_file['version']
		);

		error_log("Register " . $name . " from " . $filepath . " result: " . $result);

		$result = wp_register_style(
			'sthm-frontend',
			__DIR__ . 'build/style-index.css',
			array(),
			$asset_file['version']
		);

		error_log("Register sthm-frontend from build/style-index.css result: " . $result);

		// Scripts.
		$name       = 'blocks';
		$filepath   = 'build/' . $name;
		$asset_file = $this->get_asset_file( $filepath );

		$result = wp_register_script(
			'sthm-editor',
			__DIR__ . $filepath . '.js',
			array_merge( $asset_file['dependencies'], array( 'wp-api' ) ),
			$asset_file['version'],
			true
		);

		error_log("Register " . $name . " from " . $filepath . " result: " . $result);
	}

	public function editor_scripts(){

		$name       = 'blocks';
		$filepath   = get_stylesheet_directory_uri() . '/build/' . $name;
		$asset_file = $this->get_asset_file( $filepath );
		
		wp_enqueue_script('blocks', $filepath . '.js',
			array_merge( $asset_file['dependencies'], array( 'wp-blocks' ) ),
			$asset_file['version'],
			true
		);
	}
}
STHM_Block_Assets::register();
