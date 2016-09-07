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


  // --------------------------------------------
  // When user scrolls the secondary/nav filter,
  // make the gradient effect fade out.
  // --------------------------------------------

  var lastScrollLeft = 0;
  var containerWidth = $('.menu-filter-container').outerWidth();
  var threshhold = containerWidth - 100;
  var overlayVisible = true;
  console.log(threshhold);
  // Detect when secondary nav has scrolled left
  $('.menu-filter-container').scroll(function() {
    var menuScrollLeft = $('.menu-filter-container').scrollLeft();
    console.log("scroll left: " + menuScrollLeft);
    if (menuScrollLeft > threshhold && overlayVisible) {
      console.log("Threshhold met!");
      $('.nav-filter-overlay').fadeOut(200);
      overlayVisible = false;
    }
    else if (menuScrollLeft < threshhold && !overlayVisible) {
      $('.nav-filter-overlay').fadeIn(200);
      overlayVisible = true;
    }
  });
});
