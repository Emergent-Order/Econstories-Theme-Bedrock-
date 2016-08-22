<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');


/**
 * Get the URL from an oembed file
 */
// function get_url_from_oembed($oembed) {
// 	$urlStart = strpos($oembed, 'src="') + 5;
// 	$fragment = substr($oembed, $urlStart);
// 	$urlEnd = strpos($fragment, '"');
// 	$url = substr($fragment, 0, $urlEnd);
// 	return $url;
// }

// /*
//  * Check for custom description, otherwise show Excerpt, otherwise show
//  * snippet of post.
//  *
//  * @link Reference - http://codex.wordpress.org/Function_Reference/get_the_excerpt
//  */
// function the_excerpt_max_charlength($charlength) {
// 	$excerpt = get_the_excerpt();
// 	$rwmb_excerpt = rwmb_meta('econstories-description');
//
// 	if (strlen($rwmb_excerpt) > 0 ) {
// 		echo $rwmb_excerpt;
// 	}
// 	else {
// 		$charlength++;
// 		if ( mb_strlen( $excerpt ) > $charlength ) {
// 			$subex = mb_substr( $excerpt, 0, $charlength - 5 );
// 			$exwords = explode( ' ', $subex );
// 			$excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
// 			if ( $excut < 0 ) {
// 				echo mb_substr( $subex, 0, $excut );
// 			} else {
// 				echo $subex;
// 			}
// 			// echo ' <br><a href="' . get_permalink() . '" class="more-link" title="Read More">Read A Thing</a>';
// 		} else {
// 			echo $excerpt;
// 		}
// 	}
// }
