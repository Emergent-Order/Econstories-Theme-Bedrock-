<article <?php post_class(); ?>>

  <?php

  // If Post Type = "extra-credit", return "open-window"
	if (get_post_type($post->ID) == "extra-credit") {
		$url = rwmb_meta('econstories-affiliate-url', $post->ID);
		$actionClass = "open-window";
		$target = "target='_blank'";
	}
	// Else, return "#"
	else {
		$url = "#";
		$actionClass = "open-lightbox";
		$target = "";
	}

	$output = " ";
	$output .= '<a href="' . $url . ' " class="action-link '. $actionClass . '"' . $target . '>';

  ?>
  <header>
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <div class="entry-summary">
    <?php the_excerpt(); ?>
  </div>
</article>
