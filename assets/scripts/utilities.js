
// --------------------------------------------------
//  Given a value, filter the Isotope content, scroll
//  back up to the top, and select the correct filter.
// --------------------------------------------------

function filterContent(filter) {
  var $filteredByTag;
  var $content = jQuery('.content');
  $content.isotope({
    itemSelector: 'article',
    layoutMode: 'masonry',
    filter: filter
  });
  console.log(filter);
  scrollBackUp();
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
      scrollTop: 900
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
