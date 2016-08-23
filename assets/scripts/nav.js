jQuery(function($) {
  console.log("nav.js loaded");
  var $navWrap = $('header.banner');
  var a = $navWrap.offset().top + 200;

  $(document).scroll( function() {
    if ($(this).scrollTop() > a) {
      $navWrap.addClass("bg-inverse")
    }
    else {
      $navWrap.removeClass("bg-inverse")
    }
  });

  $( '.fixedsticky' ).sticky({
    topSpacing: 0
  });
});
