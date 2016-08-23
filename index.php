<?php get_template_part('templates/page', 'header'); ?>


<?php
  global $wp_query;
  $args = array_merge( $wp_query->query_vars, array( 'post_type' => array('extra-credit', 'post' ), 'orderby' => 'rand' ));
  query_posts( $args );

?>
<section class="content">
  <?php if (!have_posts()) : ?>
    <div class="alert alert-warning">
      <?php _e('Sorry, no results were found.', 'sage'); ?>
    </div>
    <?php get_search_form(); ?>
  <?php endif; ?>

  <?php while (have_posts()) : the_post(); ?>
    <?php get_template_part('templates/content', get_post_type() != 'post' ? get_post_type() : get_post_format()); ?>
  <?php endwhile; ?>
</section>

<?php the_posts_navigation(); ?>
