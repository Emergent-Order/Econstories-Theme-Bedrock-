(function() {
  jQuery(document).ready(function($) {
    var $clear, $search, $search_bar, $search_bar_wrap, lastScrollTop;
    console.log("search-bar-functions loaded");
    $('nav.nav-secondary input').wrap('<div class="search-bar-wrap"></div>');
    $search_bar_wrap = $('.nav-secondary .search-bar-wrap');
    $search_bar = $('.nav-secondary input');
    $clear = $('nav.nav-secondary #clear-search');
    $search_bar.on('focus', function() {
      console.log("Focused");
      $clear.removeClass('hide');
    });
    $search_bar.off('focus', function() {
      console.log("un-focused");
      $clear.addClass('hide');
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
      $(window).on("scroll", function() {
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
        lastScrollTop = currentScrollTop;
      });
      return;
    }
  });

}).call(this);
