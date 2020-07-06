<?php
/**
 * STHMTwenty Theme
 * https://github.com/donald-knieriem-temple/sthmtwenty
 *
 * @package  WordPress
 * @subpackage  STHM
 */

if ( file_exists('.ver') )
{
	$theme_ver = file_get_contents('.ver');
} else {
	$theme_ver = '1.0.0'; //default
}


/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'register_menus' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_filter( 'block_categories', array( $this, 'my_plugin_block_categories' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );

		parent::__construct();
	}
	/** This is where you can register custom post types. */
	public function register_post_types() {

	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {

	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['foo']   = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		$context['tertiaryNav']  = new Timber\Menu('tertiary');
		$context['siteNav'] = new Timber\Menu('site_nav');
		$context['footerNav'] = new Timber\Menu('footer_nav');
		$context['site']  = $this;
		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

	}

	public function register_menus( $context )
	{
		register_nav_menus(
			array(
				'tertiary' => __( 'Tertiary Nav'),
				'site_nav' => __( 'Site Nav'),
				'footer_nav' => __( 'Footer Nav'),
				'sub_nav' => __( 'Sub Nav' ),
			)
		);

	    $menuname = 'Tertiary Nav';
		$menulocation = 'tertiary';
		// Does the menu exist already?
		$menu_exists = wp_get_nav_menu_object( $menuname );

		// If it doesn't exist, let's create it.
		if( !$menu_exists){
		    $menu_id = wp_create_nav_menu( $menuname );

		    // Set up default BuddyPress links and add them to the menu.
		    wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Apply Now'),
		        'menu-item-classes' => '',
		        'menu-item-url' => esc_url_raw( 'https://temple.edu/apply/' ),
		        'menu-item-type' => 'custom',
		        'menu-item-status' => 'publish'));

		    wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Schedule a Visit'),
		        'menu-item-classes' => '',
		        'menu-item-url' => home_url( '/undergraduate-programs/schedule-a-visit/' ), 
		        'menu-item-status' => 'publish'));

		    wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Request Info'),
		        'menu-item-classes' => '',
		        'menu-item-url' => home_url( '/undergraduate-programs/request-information/' ), 
		        'menu-item-status' => 'publish'));

		    wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Alumni'),
		        'menu-item-classes' => '',
		        'menu-item-url' => home_url( '/alumni/' ), 
		        'menu-item-status' => 'publish'));

		    wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Current Students'),
		        'menu-item-classes' => '',
		        'menu-item-url' => home_url( '/current-students/' ), 
		        'menu-item-status' => 'publish'));

			wp_update_nav_menu_item($menu_id, 0, array(
		        'menu-item-title' =>  __('Support STHM'),
		        'menu-item-classes' => 'btn btn-primary',
		        'menu-item-url' => home_url( '/give/' ), 
		        'menu-item-status' => 'publish'));

	    	// Grab the theme locations and assign our newly-created menu
		    // to the BuddyPress menu location.
		    if( !has_nav_menu( $menulocation ) ){
		        $locations = get_theme_mod('nav_menu_locations');
		        $locations[$menulocation] = $menu_id;
		        set_theme_mod( 'nav_menu_locations', $locations );
		    }

		}
	}

	public function register_scripts( $context )
	{
		wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), $theme_ver, 'all' );

		wp_enqueue_script( 'stylescript', get_stylesheet_directory_uri() . '/assets/js/style.js', array(), $theme_ver, false );

		wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('stylescript'), $theme_ver, false );
	}

	public function my_plugin_block_categories( $categories ) {

	    return array_merge(
	        $categories,
	        array(
	            array(
	                'slug' => 'sthm',
	                'title' => 'STHM',
	                'icon' => 'dashicons-welcome-add-page'
	            ),
	        )
	    );
	}

	public function register_blocks( $context )
	{

		foreach ( glob(TEMPLATEPATH . "/blocks/*.php") as $filename )
		{
		    include $filename;
		}

		// automatically load dependencies and version
    	$asset_file = include( get_stylesheet_directory() . '/blocks/section/build/index.asset.php');
 
   		wp_register_script(
	        'sthm-section', //handle
	        get_stylesheet_directory_uri() . '/blocks/section/build/index.js', //filepath
	        $asset_file['dependencies'],
	        $asset_file['version']
	    );
	 
	    register_block_type( 'sthm-section', array(
	        'editor_script' => 'sthm-section',
	    ) );
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
		$twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

}

new StarterSite();
