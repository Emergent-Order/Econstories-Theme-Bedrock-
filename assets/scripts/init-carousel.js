(function() {
  jQuery(document).ready(function($) {
    var articles;
    console.log("init-carousel loaded");
    articles = $('.featured-header-wrapper article');
    if (articles.length > 1) {
      $('.featured-header-wrapper').slick({
        slidesToShow: 1,
        infinite: true,
        lazyLoad: true,
        dots: true
      });
    }
    return articles.each(function() {
      var $play, $play_container;
      $play = $(this).find('.play-button');
      return $play_container = $(this).find('.play-button-container');
    });
  });

}).call(this);
