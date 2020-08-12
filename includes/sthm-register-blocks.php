<?php
/**
 * Register blocks.
 *
 * @package sthm
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class STHM_Register_Blocks {


	private static $instance;

	public static function register() {
		if ( null === self::$instance ) {
			error_log("STHM_Register_Blocks::Registered new instance");
			self::$instance = new STHM_Register_Blocks();
		}

		return self::$instance;
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		$this->slug = 'sthm';
		//add_filter( 'block_categories', array( $this, 'sthm_block_categories' ), 99 );
		add_action( 'init', array( $this, 'register_blocks' ), 99 );
	}


	public function sthm_block_categories( $categories ) {

		error_log("STHM_Register_Blocks::categories");

	    return array_merge(
	        $categories,
	        array(
	            array(
	                'slug' => 'sthm',
	                'title' => 'STHM',
	                'icon' => '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="m-.17-.17h120v120.28h-120z" fill="#a41e35"/><g fill="#fff"><path d="m19.56 12.98v32.62h6.99v-26.13h66.89v26.13h6.66v-32.62z"/><path d="m37.53 86.03v6.66h18.47v-65.06h-21.63v17.97h6.82v-11.16h7.99v51.59z"/><path d="m64.07 27.54v65.07h18.47v-6.66h-11.65v-51.59h7.99v11.24h6.83v-18.06h-14.82z"/><path d="m37.53 106.96h45.01v-6.58h-45.01z"/></g></svg>',
	            ),
	        )
	    );
	}

	/**
	 * Add actions to enqueue assets.
	 *
	 * @access public
	 */
	public function register_blocks() {

		// Return early if this function does not exist.
		if ( ! function_exists( 'register_block_type' ) ) {
			error_log("STHM_Register_Blocks::register_block_type ! exist!");
			return;
		}

		// Shortcut for the slug.
		$slug = $this->slug;

		$blocks = ['grid', 'griditem', 'rich-slider', 'section', 'slide', 'slideshow'];

		foreach( $blocks as $block ){

			error_log("STHM_Register_Blocks::Register " . $slug . '/' . $block);
			$blocktype = register_block_type(
				$slug . '/' . $block,
				array(
					// 'editor_script' => $slug . '-editor',
					// 'editor_style'  => $slug . '-editor',
					// 'style'         => $slug . '-frontend',
				)
			);
			error_log("...");
			error_log("Registered " . $block . "? " . !is_object($blocktype) ? $blocktype->$name : "false");
		}
	}
}

STHM_Register_Blocks::register();
