<?php use Roots\Sage\Titles; ?>

<div class="page-header">

  <?php dynamic_sidebar('sidebar-email'); ?>
  <!-- Navigation -->
  <nav class="nav-secondary">
    <?php
    if (has_nav_menu('secondary_navigation')) :
      wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav filter']);
    endif;
    ?>
  </nav>

</div>
