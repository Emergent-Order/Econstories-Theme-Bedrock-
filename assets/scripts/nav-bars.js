(function() {
  (function($) {
    var $email_widget, $header, $nav, $navWrap, $nav_filter, $nav_filter_overlay, $navbg, a, range;
    console.log("navbars.coffee loaded");
    $navWrap = $('header.banner');
    a = $navWrap.offset().top + 200;
    $(document).scroll(function() {
      if ($(this).scrollTop() > a) {
        return $navWrap.addClass("bg-dark");
      } else {
        return $navWrap.removeClass("bg-dark");
      }
    });
    $nav = $('nav.nav-primary');
    $nav_filter = jQuery('nav.nav-secondary');
    $nav_filter_overlay = '<div class="nav-filter-overlay"></div>';
    $nav_filter.prepend($nav_filter_overlay);
    $navbg = $('.nav-background');
    $header = $('header.site-header');
    range = 800;
    $nav_filter.fixedsticky({
      top: 0
    });
    $nav_filter.find('.wrap').append($quicksearch);
    $email_widget = $('.econstories-mailchimp-signup-widget');
    $email_widget.detach();
    return $('header.site-header').append($email_widget);
  })(jQuery);

}).call(this);
