(function() {
  var slice = [].slice;

  jQuery(document).ready(function($) {
    var $content, $filter, $filterItems, $quicksearch, $tags, addSelectedFormatting, debounce, filterContent, getSlugName, scrollBackUp;
    console.log("init-masonry.coffee loaded");
    getSlugName = function($clicked) {
      var $slugName, $url, $url_fragments;
      $url = $clicked.attr('href');
      $url_fragments = $url.split('/');
      $slugName = $url_fragments[$url_fragments.length - 2];
      return $slugName;
    };
    $content = $('.content');
    filterContent = function(filter) {
      var $filteredByTag;
      $content.isotope({
        itemSelector: 'article',
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
      if ($url !== void 0) {
        $url_fragments = $url.split('/');
        $filterName = $url_fragments[$url_fragments.length - 2];
        $link = $('#menu-filter li a[href*="' + $filterName + '"]');
      }
      $("#menu-filter li").each(function() {
        return $(this).find('a').removeClass("selected");
      });
      if ($link) {
        return $link.addClass("selected");
      } else {
        return $('#menu-filter li a.show-all').addClass('selected');
      }
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
    $content.imagesLoaded(function() {
      return $content.isotope({
        itemSelector: 'article',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: 'article',
          gutterWidth: '.gutter-sizer'
        }
      });
    });
    $filter = $('ul#menu-filter');
    $filter.prepend("<li id='menu-all' data-sort-by='-1' class='menu-item menu-item-type-taxonomy menu-item-object-category'><a class='show-all' href=''>all</a></li>");
    $filterItems = [];
    $('#menu-filter li').each(function() {
      $filterItems.push($(this));
      return $(this).click(function() {
        event.preventDefault();
        $filter = ".category-" + getSlugName($(this).find('a'));
        if ($(this).find('a').attr('class') === 'show-all') {
          $filter = "*";
        }
        filterContent($filter);
        return false;
      });
    });
    $quicksearch = $('.quicksearch');
    $quicksearch.on("click", function() {
      return scrollBackUp();
    });
    $quicksearch.on("keyup", function() {
      var $searchTerm, pattern;
      pattern = new RegExp($quicksearch.val(), 'i');
      console.log(pattern);
      scrollBackUp();
      $searchTerm = $quicksearch.val();
      if ($searchTerm.length > 0) {
        return $content.isotope({
          filter: function() {
            if (pattern.test($(this).text())) {
              return true;
            }
            return console.log(pattern.test($(this).text()));
          }
        });
      } else {
        return $content.isotope({
          filter: '*'
        });
      }
    });
    $tags = $('.entry-categories');
    return $tags.each(function() {
      return $(this).find('a').click(function() {
        event.preventDefault();
        $filter = ".category-" + getSlugName($(this));
        if ($(this).find('a').attr('class') === 'show-all') {
          $filter = "*";
        }
        filterContent($filter);
        return false;
      });
    });
  });

}).call(this);
