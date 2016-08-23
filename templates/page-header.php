<?php use Roots\Sage\Titles; ?>
<section class="econstories-mailchimp-signup-widget">
  <?php dynamic_sidebar('sidebar-email'); ?>
</section>
<div class="page-header">


  <!-- Navigation -->
  <nav class="nav-secondary fixedsticky" style="top:0px">
    <div class="nav-filter-overlay"></div>
    <div class="wrap">
      <?php
      if (has_nav_menu('secondary_navigation')) :
        wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav filter', 'menu_id' => 'menu-filter']);
      endif;
      ?>
      <div class="search-bar-wrap">
        <input type="text" class="quicksearch" placeholder="Search">
        <a id="clear-search" href="#" data-action="clear" class="hide"><i class="ion ion-close-round"></i></a>
      </div>

    </div>

  </nav>

</div>
