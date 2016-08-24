<?php
  // Get the featured Meta Box image for this article
  // and if there is one, set classes and url for formatting.
  if (get_post_type() == 'post') {
    $images = rwmb_meta( 'econstories-featured-image', array(), $post->ID );
  }
  elseif (get_post_type() == 'extra-credit') {
    $images = rwmb_meta( 'econstories-affiliate-featured-image', array(), $post->ID );
  }

  if ($images) {
    $first_image = array_values($images)[0];
    $full_image_src = $first_image['full_url'];
    $classes = "has-econstories-image";
  }
  else {
    $classes = "";
  }

  if (get_post_type() == 'extra-credit') {
    $classes .= " category-extra-credit";
  }
 ?>

<article <?php post_class($classes); ?>>

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

  ?>
  <!-- The lightbox link -->
  <a href="<?= $url ?>" class="action-link <?= $actionClass ?>" <?= $target ?>>

    <!-- If there are images defined by RWMB meta, print the image -->
    <?php if ($images) { ?>
    <div class="entry-header play-button-container">
      <div class="overlay"></div>

      <?php if (get_post_type($post->ID) == 'extra-credit') { ?>
        <img class="play-button" src="<?= get_stylesheet_directory_uri() . '/dist/images/external-link.png'; ?>" />
      <?php } else { ?>
        <img class="play-button" src="<?= get_stylesheet_directory_uri() . '/dist/images/play-button.png'; ?>" />
      <?php } ?>
      <img src=" <?= $full_image_src; ?> " class="featured-image" />

    </div>
    <?php } ?>

    <!-- The card body -->
    <div class="entry-body">
      <!-- Entry title -->
      <a href="<?= $url ?>" class="action-link <?= $actionClass ?>" <?= $target ?>>
        <h2 class="entry-title"><?php the_title(); ?></h2>
        <?php if ($actionClass == "open-window") { ?>
          <p class="amazon-cta">see this product on amazon<span class="fa fa-angle-right"></span></p>
         <?php }?>
       </a>


      <!-- Entry summary -->
      <div class="entry-summary">
        <?php
        if (rwmb_meta('econstories-description')) {
          echo rwmb_meta('econstories-description');
        } else {
          the_content();
        }
        ?>
      </div>
    </div>

  <!-- /.lightbox link -->
  </a>

  <div class="entry-footer">
    <?php get_template_part('templates/entry-meta'); ?>
  </div>


</article>
