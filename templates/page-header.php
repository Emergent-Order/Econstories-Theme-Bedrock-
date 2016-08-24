<?php use Roots\Sage\Titles; ?>
<section class="econstories-mailchimp-signup-widget">
  <?php if ($_ENV['WP_ENV'] == "development") {
    ?>
    <section class="widget mc4wp_form_widget-2 widget_mc4wp_form_widget">
      <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-396" method="post" data-id="396" data-name="Never Miss Another EconStories">
        <div class="mc4wp-form-fields">	<label>Never miss another EconStories video: </label>
	      <input type="email" name="EMAIL" placeholder="Your email address" required="">
        <input type="submit" value=""><div style="display: none;">
          <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off"></div>
          <input type="hidden" name="_mc4wp_timestamp" value="1472053036"><input type="hidden" name="_mc4wp_form_id" value="396">
          <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1"></div><div class="mc4wp-response"></div>
        </form><!-- / MailChimp for WordPress Plugin -->
      </section>
  <?php } else { ?>
  <?php dynamic_sidebar('sidebar-email'); } ?>
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
