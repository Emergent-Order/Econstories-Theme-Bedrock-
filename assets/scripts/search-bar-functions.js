(function() {
  jQuery(document).ready(function($) {
    var $clear, $search, $search_bar, $search_bar_wrap, lastScrollTop;
    $('nav.nav-secondary input').wrap('<div class="search-bar-wrap"></div>');
    $search_bar_wrap = $('nav.nav-secondary .search-bar-wrap');
    $search_bar = $('nav.nav-secondary input');
    $clear = $('nav.nav-secondary #clear-search');
    $search_bar.focus(function() {
      return $clear.removeClass('hide');
    });
    $search_bar.off('focus', function() {
      return $clear.addClass('hide');
    });
    $clear.click(function() {
      event.preventDefault();
      console.log(event.type);
      $search_bar.val("");
      $clear.addClass('hide');
      filterContent("*");
      return false;
    });
    $search = $search_bar_wrap;
    console.log($search);
    if ($(window).width() <= 640) {
      lastScrollTop = 0;
      return $(window).on("scroll", function() {
        var currentScrollTop, up;
        currentScrollTop = $(this).scrollTop();
        if (currentScrollTop < lastScrollTop) {
          up = true;
        } else {
          up = false;
        }
        if (up && currentScrollTop > 800) {
          $search.removeClass("hide");
          $search.removeClass("small");
        } else if ($('nav.nav-secondary input').is(":focus")) {
          $search.removeClass("hide");
          $search.removeClass("small");
        } else {
          $search.addClass("hide");
          $search.addClass("small");
        }
        return lastScrollTop = currentScrollTop;
      });
    }
  });

}).call(this);
