(function() {
  $(function() {
    var articles;
    articles = $('.featured-header-wrapper article');
    if (articles.length > 1) {
      $('.featured-header-wrapper').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: true,
        lazyContent: true
      });
    }
    return articles.each(function() {
      var $img, $play, $play_container;
      $play = $(this).find('.play-button');
      $play_container = $(this).find('.play-button-container');
      $img = $(this).find('.featured-article-image').attr('style');
      $img = $img.replace('background:url(', '');
      $img = $img.replace(')', '');
      return console.log($img);
    });
  });

}).call(this);
