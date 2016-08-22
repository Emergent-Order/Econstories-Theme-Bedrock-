<?php

add_action( 'init', 'cptui_register_my_cpts_extra_credit' );
function cptui_register_my_cpts_extra_credit() {
	$labels = array(
		"name" => __( 'Extra Credit', '' ),
		"singular_name" => __( 'Extra Credit', '' ),
		);

	$args = array(
		"label" => __( 'Extra Credit', '' ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"show_ui" => true,
		"show_in_rest" => false,
		"rest_base" => "",
		"has_archive" => true,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "extra-credit", "with_front" => true ),
		"query_var" => true,
		"menu_position" => 6,"menu_icon" => "dashicons-star-filled",
		"supports" => array( "title", "editor", "thumbnail" ),
		"taxonomies" => array( "category", "post_tag" ),
	);
	register_post_type( "extra-credit", $args );

// End of cptui_register_my_cpts_extra_credit()
}

?>
