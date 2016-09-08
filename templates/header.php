<header class="banner">
  <div class="wrap">
    <!-- Brand -->
    <a class="brand" href="<?= esc_url(home_url('/')); ?>">econ<strong>stories</strong><p class="brand-tagline">powered by emergent order</p></a>

    <!-- Navigation -->
    <nav class="nav-primary">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav underlinify']);
      endif;
      ?>
    </nav>

    <!-- Social Media -->
    <!-- no javascript, these are just outbound links -->
      <div class="social-icons">
          <a href="http://www.zazzle.com/econstories" target="_blank" class="fa fa-shopping-cart"></a>
          <a href="http://www.youtube.com/econstories" target="_blank" class="fa fa-youtube"></a>
          <a href="http://www.facebook.com/econstories" target="_blank" class="fa fa-facebook"></a>
          <a href="http://www.twitter.com/econstories" target="_blank" class="fa fa-twitter"></a>
      </div>


  </div>
</header>
<section class="featured">
  <?php

  if (is_front_page()) {

    $query = new WP_Query( array( 'meta_key' => '_is_ns_featured_post', 'meta_value' => 'yes', 'orderby' => array('meta_value' => 'econstories-featured-priority' ) ) );

    if ($query->have_posts()) {

      echo '<div class="featured-header-wrapper carousel">';
      $urls = array();

      while ( $query->have_posts()) {
        $query->the_post();
        $post_slug = basename(get_permalink());

        $images = rwmb_meta( 'econstories-featured-image', array(), $post->ID );
        $first_image = array_values($images)[0];
        $full_image_src = $first_image['full_url'];

        $snippet = rwmb_meta( 'econstories-description' );
        if (wp_is_mobile()) {
          $snippet = myTruncate($snippet, 200, " ");
        }

        $oembed = rwmb_meta('econstories-oembed');

        $url = get_url_from_oembed($oembed);

        echo '<article class="featured-article" data-priority="'. rwmb_meta('econstories-featured-priority') .'">';
        echo '<a class="featured-article-link" id="' . $post_slug . '-featured-link" href="' . $url . '">';
        echo '<div class="play-button-container">';
        echo '<div class="overlay"></div>';
        echo '<img class="play-button" src="' . get_stylesheet_directory_uri() . '/dist/images/play-button.png" />';


        echo '<img class="featured-article-image" src="'. $full_image_src . '"/>' ;
        echo '</div>';

        echo '<div class="featured-article-entry">';
        echo '<h2 class="entry-title">' . get_the_title(). '</h2>';
        echo '<p class="entry-content">' . $snippet . '</p>';
        echo '</div></a>';
        echo '</article>';

      }
      echo '</div>';

      echo '<div class="featured-oembeds">';
      echo '</div>';
    }

  }
  ?>
</section>
