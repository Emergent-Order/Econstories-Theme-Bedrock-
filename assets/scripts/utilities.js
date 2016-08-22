(function() {
  var $content, addSelectedFormatting, debounce, filterContent, getSlugName, scrollBackUp,
    slice = [].slice;

  $content = $('.content');

  filterContent = function(filter) {
    var $filteredByTag;
    $content.isotope({
      itemSelector: '.entry',
      layoutMode: 'masonry',
      filter: filter
    });
    console.log(filter);
    scrollBackUp();
    $filteredByTag = $('nav.nav-secondary a[href*="' + filter.replace('.category-', '') + '"]');
    if (filter !== void 0) {
      addSelectedFormatting($filteredByTag);
    }
    return false;
  };

  scrollBackUp = function() {
    if ($(window).width() <= 640) {
      $('html, body').animate({
        scrollTop: 1200
      });
    } else {
      $('html, body').animate({
        scrollTop: 900
      });
    }
    return false;
  };

  addSelectedFormatting = function($toElement) {
    var $filterName, $link, $url, $url_fragments;
    $url = $toElement.attr('href');
    $url_fragments = $url.split('/');
    $filterName = $url_fragments[$url_fragments.length - 2];
    $link = $('#menu-filter li a[href*="' + $filterName + '"]');
    $("#menu-filter li").each(function() {
      return $(this).find('a').removeClass("selected");
    });
    return $link.addClass("selected");
  };

  getSlugName = function($clicked) {
    var $slugName, $url, $url_fragments;
    $url = $clicked.attr('href');
    $url_fragments = $url.split('/');
    $slugName = $url_fragments[$url_fragments.length - 2];
    return $slugName;
  };

  debounce = function(func, threshold, execAsap) {
    var timeout;
    timeout = null;
    return function() {
      var args, delayed, obj;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      obj = this;
      delayed = function() {
        if (!execAsap) {
          func.apply(obj, args);
        }
        return timeout = null;
      };
      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }
      return timeout = setTimeout(delayed, threshold || 200);
    };
  };

}).call(this);
