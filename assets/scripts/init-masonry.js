(function() {
  jQuery(document).ready(function($) {
    var $content, $filter, $filterItems, $quicksearch, $tags;
    console.log("init-masonry.coffee loaded");
    $content = $('.content');
    $content.imagesLoaded(function() {
      return $content.isotope({
        itemSelector: 'article',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: 'article',
          gutterWidth: '.gutter-sizer'
        },
        getSortData: {
          name: '.entry-title',
          type: '[data-type-sort]',
          cat: '[data-category-sort]',
          image: '[data-image-sort]'
        },
        sortBy: 'image'
      });
    });
    $filter = $('ul#menu-filter');
    $filter.prepend("<li id='menu-all' data-sort-by='-1' class='menu-item menu-item-type-taxonomy menu-item-object-category'><a class='show-all selected' href=''>all</a></li>");
    $filterItems = [];
    $('#menu-filter li').each(function() {
      $filterItems.push($(this));
      $(this).find('a').addClass("normal-filter");
      return $(this).find('a').click(function() {
        event.preventDefault();
        if ($(this).attr('class').includes('show-all')) {
          $filter = "*";
        } else {
          $filter = ".category-" + getSlugName($(this));
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
    $tags = $('.tags');
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
