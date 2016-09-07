<?php
/**
 * Sage includes
 *
 * The $sage_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/sage/pull/1042
 */
$sage_includes = [
  'lib/assets.php',       // Scripts and stylesheets
  'lib/extras.php',       // Custom functions
  'lib/setup.php',        // Theme setup
  'lib/titles.php',       // Page titles
  'lib/wrapper.php',      // Theme wrapper class
  'lib/customizer.php',   // Theme customizer
  'lib/post-types.php',   // Custom post types
  'lib/meta-boxes.php'    // Post meta-boxes
];

foreach ($sage_includes as $file) {
  if (!$filepath = locate_template($file)) {
    trigger_error(sprintf(__('Error locating %s for inclusion', 'sage'), $file), E_USER_ERROR);
  }

  require_once $filepath;
}
unset($file, $filepath);


/**
 * Custom includes
 *
 *
 * @link https://github.com/roots/sage/pull/1042
 */

function get_url_from_oembed($oembed) {
	$urlStart = strpos($oembed, 'src="') + 5;
	$fragment = substr($oembed, $urlStart);
	$urlEnd = strpos($fragment, '"');
	$url = substr($fragment, 0, $urlEnd);
	return $url;
}


/* -----------------------
 * Localize ajax scripts through admin-ajax
 */

add_action('wp_enqueue_scripts', 'ajax_enqueue_scripts');
function ajax_enqueue_scripts() {
	wp_enqueue_script('lightbox', get_stylesheet_directory_uri() . '/dist/scripts/lightbox.js', array('jquery'), null, true );

	wp_localize_script( 'lightbox', 'lightboxy', array(
		'ajax_url' => admin_url( 'admin-ajax.php')
		));
}

/* -----------------------
 * Build the AJAX response
 */

function extra_credit_html() {
	global $wpdb;

	// Get the URL from the AJAX call
	$page_title = $_POST['title'];

	// Find the posts they belong to
	$post = get_page_by_title( $page_title, 'object', 'post' );
	// console_log("Should be an ID: " . $post_id);
	$extra_credit_id = rwmb_meta('econstories-extra-credit', array() ,$post->ID);
	$extra_credit = get_post($extra_credit_id);
	// console_log($extra_credit);

	// Find the oembed code for the post
	$oembed_raw = rwmb_meta('econstories-oembed', 'type=oembed', $post->ID);
	$oembed = str_replace('?feature=oembed', '?rel=0&amp;autoplay=1', $oembed_raw);



	$extra_credit_title = get_the_title($extra_credit_id);
	$extra_credit_author = rwmb_meta('econstories-author-name', array(), $extra_credit_id);
	$extra_credit_learn_more = rwmb_meta('econstories-affiliate-learn-more', array(), $extra_credit_id);
	$extra_credit_content = get_post_field('post_content', $extra_credit_id);
	$extra_credit_link = rwmb_meta('econstories-affiliate-url', array(), $extra_credit_id);

	$images = rwmb_meta( 'econstories-affiliate-featured-image', array(), $extra_credit_id );
	$first_image = array_values($images)[0];
	$extra_credit_image = $first_image['full_url'];
	// console_log($first_image);




	// Add oembed to array
	$response = array();

	array_push(
		$response,
		$post,
		$oembed,
		$extra_credit_learn_more,
		$extra_credit_title,
		$extra_credit_author,
		$extra_credit_content,
		$extra_credit_link,
		$extra_credit_image
		);

	echo json_encode($response);

	wp_die();

}
add_action('wp_ajax_extra_credit_html', 'extra_credit_html');
add_action('wp_ajax_nopriv_extra_credit_html', 'extra_credit_html');

// Original PHP code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function myTruncate($string, $limit, $break=".", $pad="...")
{
  // return with no change if string is shorter than $limit
  if(strlen($string) <= $limit) return $string;

  // is $break present between $limit and the end of the string?
  if(false !== ($breakpoint = strpos($string, $break, $limit))) {
    if($breakpoint < strlen($string) - 1) {
      $string = substr($string, 0, $breakpoint) . $pad;
    }
  }

  return $string;
}

// Hide admin bar for everyone
add_filter('show_admin_bar', '__return_false');
