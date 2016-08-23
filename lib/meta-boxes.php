<?php

/**
 * Create Metaboxes
 *
 * @link https://metabox.io/docs/
 *
 */


add_action( 'admin_enqueue_scripts', 'es_enqueue_admin_scripts' );
function es_enqueue_admin_scripts() {
	wp_enqueue_script( 'vendor-scripts', get_stylesheet_directory_uri() . '/dist/js/vendor.js', array(), false, true );
	wp_enqueue_script( 'admin-scripts', get_stylesheet_directory_uri() . '/public/js/admin.js', array(), false, true );
}

add_filter( 'rwmb_meta_boxes', 'econstories_register_meta_boxes' );
function econstories_register_meta_boxes( $meta_boxes ) {
    $prefix = 'econstories-';


    // Post-Information meta box on post pages
    $meta_boxes[] = array(
        'id'         => 'post-information',
        'title'      => __( 'Post Information', 'textdomain' ),
        'post_types' => array( 'post' ),
        'context'    => 'normal',
        'priority'   => 'high',
        'fields' => array(

        	// Short Description / Excerpt meta box field
   //      	$length = 300;
			// $box = "#econstoriesdescription";
			// $handle = "#post-information .handlediv";
			// $script = "<script> countCharacters(" . $length . "," . $box + "," . $handle . ")</script>";
            array(
            	'name' => 'Content Excerpt',
                'description'  => __( 'Super Short Description', 'text' ),
                'desc'  => 'Let\'s keep it under 300 characters.',
                'id'    => $prefix . 'description',
                'type'  => 'textarea',
								'admin_columns' => 'replace tags'
            ),

            // Video URL meta box field
            array(
            	'name' => 'YouTube Link',
                'description'  => __( 'Video Link', 'text' ),
                'desc'  => 'Where does this video live on YouTube?',
                'id'    => $prefix . 'oembed',
                'type'  => 'oembed'
            ),

            // Image upload meta box field
            array(
            	'name' => 'Featured Image',
                'description'  => __( 'Featured Image', 'text' ),
                'desc'  => 'Pick a picture for the card',
                'id'    => $prefix . 'featured-image',
                'type'  => 'plupload_image',
								'admin_columns' => 'replace author',
            ),

            // Associated Extra Credit
            array(
            	'name' => 'Extra Credit',
                'description'  => __( 'Extra Credit', 'text' ),
                'desc'  => 'Select any Extra Credit posts to show in the lightbox of this post',
                'id'    => $prefix . 'extra-credit',
                'type'  => 'post',
                'field_type' => 'select_advanced',
                'placeholder' => 'Select an Extra Credit Post',
                'query_args' => array(
                	'post_type' => 'extra-credit',
                ),
								'admin_columns' => true

            ),
        )
    );
    // 2nd meta box
    $meta_boxes[] = array(
        'title'      => __( 'Affiliate Information', 'textdomain' ),
        'post_types' => 'extra-credit',
        'fields'     => array(
            array(
                'name' => __( 'Affiliate Link', 'affiliate-url' ),
                'id'   => $prefix . 'affiliate-url',
                'type' => 'url',
								'admin_columns' => true
            ),
            array(
                'name' => __( 'Author Name', 'author-name' ),
                'id'   => $prefix . 'author-name',
                'type' => 'text',
            ),
            array(
                'name' => __( 'Affiliate Featured Image', 'affiliate-featured-image' ),
                'id'   => $prefix . 'affiliate-featured-image',
                'desc'  => 'Pick a picture for the card',
                'type' => 'plupload_image',
								'admin_columns' => true
            ),
            array(
                'name' => __( 'Affiliate "Learn More" Text', 'affiliate-learn-more' ),
                'id'   => $prefix . 'affiliate-learn-more',
                'desc'  => 'What would you like to say inside the pop up?',
                'type' => 'textarea',
            ),
        )
    );
    return $meta_boxes;
}


/**
 * Add Term Metaboxes
 *
 * @link https://metabox.io/plugins/mb-term-meta
 *
 */


function econstories_register_taxonomy_meta_boxes($cat_meta_boxes)
{
	$prefix = "econstories-admin";
	$cat_meta_boxes[] = array(
		'id'         => 'tag-custom-meta',
        'title'      => __( 'Category Details', 'textdomain' ),
        'context'    => 'normal',
        'priority'   => 'high',
		'title' => 'Category Details',
		'taxonomies' => 'category',

		'fields' => array(
			// array(
			// 	'name' => __( 'Content Type', 'radio'),
			// 	'id' => $prefix . 'category-content-type',
			// 	'type' => 'radio',
			// 	'options' => array(
			// 		'regular' => 'Regular',
			// 		'extra-credit' => 'Extra Credit'
			// 	)
			// ),
			array(
				'name' => 'Content Color',
				'id' => $prefix . 'category-content-color',
				'type' => 'color'
			)
		)
	);
	return $cat_meta_boxes;
}
add_filter('rwmb_meta_boxes', 'econstories_register_taxonomy_meta_boxes');
