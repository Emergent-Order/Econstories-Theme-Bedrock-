(function() {
  $(function() {
    var $filter, $filterItems, $quicksearch, $tags;
    $content.imagesLoaded(function() {
      return $content.isotope({
        itemSelector: '.entry',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: 'article'
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
