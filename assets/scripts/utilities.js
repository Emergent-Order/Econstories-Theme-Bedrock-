var $ = jQuery.noConflict();
// --------------------------------------------------
//  Given a value, filter the Isotope content, scroll
//  back up to the top, and select the correct filter.
// --------------------------------------------------

function filterContent(filter) {
  var $filteredByTag;
  var $content = jQuery('.content');
  var sortData, sortDir;

  // If Love Gov, put the episodes in order by name
  if (filter == ".category-love-gov") {
    sortData = 'name';
    sortDir = true;
  }
  // If Econpop, make sure episodes load before extra credit
  else if (filter == ".category-econpop") {
    sortData = 'type';
    sortDir = false;
  }
  // Otherwise, sort by whether the content has an image
  else {
    sortData = 'image';
    sortDir = true;
  }

  // Filter & Sort!
  $content.isotope({
    itemSelector: 'article',
    layoutMode: 'masonry',
    filter: filter,
    sortBy: sortData,
    sortAscending: sortDir
  });

  console.log(filter);
  console.log(sortData);
  console.log(sortDir);

  // Scroll us back to the top
  scrollBackUp();

  // Add formatting to the filter we just clicked on
  $filteredByTag = jQuery('nav.nav-secondary a[href*="' + filter.replace('.category-', '') + '"]');
  if (filter !== void 0) {
    addSelectedFormatting($filteredByTag);
  }
}

// --------------------------------------------------
//  Given a clicked <a>, get the slug
// --------------------------------------------------

function getSlugName($clicked) {
  var $slugName, $url, $url_fragments;
  $url = $clicked.attr('href');
  $url_fragments = $url.split('/');
  $slugName = $url_fragments[$url_fragments.length - 2];
  return $slugName;
}

// --------------------------------------------------
//  Scroll back up to the top
// --------------------------------------------------

function scrollBackUp() {
  if (jQuery(window).width() <= 640) {
    jQuery('html, body').animate({
      scrollTop: 1200
    });
  } else {
    jQuery('html, body').animate({
      scrollTop: 920
    });
  }
}

// --------------------------------------------------
//  Given a clicked <a>, add "selected" class to the
//  correct subnav filter element
// --------------------------------------------------

function addSelectedFormatting($toElement) {
  var $filterName, $link, $url, $url_fragments;
  $url = $toElement.attr('href');

  if ($url !== void 0) {
    $url_fragments = $url.split('/');
    $filterName = $url_fragments[$url_fragments.length - 2];
    $link = jQuery('#menu-filter li a[href*="' + $filterName + '"]');
  }

  jQuery("#menu-filter li").each(function() {
    jQuery(this).find('a').removeClass("selected");
  });

  if ($link) {
    $link.addClass("selected");
  } else {
    jQuery('#menu-filter li a.show-all').addClass('selected');
  }

}
