(function() {
  (function($) {
    var $articles, $featuredArticles, appendLightbox, deleteAllThings, errorFunction, extracredit, getPostData, oembed, openLightbox, post;
    console.log("lightbox.coffee loaded");
    $('#lightbox-content').featherlight;
    $articles = $('.content').find('article');
    post = "";
    oembed = "";
    extracredit = "";
    $articles.each(function() {
      var $container, $title;
      $container = $(this).find('.entry-featured-image');
      $title = $(this).find('h2.entry-title').text();
      return $(this).on("click", function() {
        if ($(this).find('a').hasClass('open-lightbox')) {
          event.preventDefault();
          return getPostData($title);
        }
      });
    });
    $featuredArticles = $('header').find('article');
    $featuredArticles.each(function() {
      return $(this).on("click", function() {
        var $title;
        event.preventDefault();
        $title = $(this).find('.entry-title').text();
        return getPostData($title);
      });
    });
    getPostData = function($title) {
      var req;
      return req = $.ajax({
        url: lightboxy.ajax_url,
        type: 'POST',
        data: {
          title: $title,
          action: 'extra_credit_html'
        },
        dataType: 'json',
        success: function(data) {
          post = data[0];
          oembed = data[1];
          return extracredit = data[2];
        }
      }).done(appendLightbox).fail(errorFunction).always(openLightbox);
    };
    appendLightbox = function(data, status, object) {
      var extracredit_container, learnmore;
      oembed = $("#lightbox-oembed-container");
      extracredit_container = $("#lightbox-extracredit-container");
      learnmore = $("#lightbox-learn-more");
      if (data.length > 0) {
        oembed.append(data[1]);
        if (data.length > 2) {
          $('#lightbox-extracredit-container .entry-title').append(data[3]);
          $('#lightbox-extracredit-container .entry-author').append(data[4]);
          $('#lightbox-extracredit-container .entry-content').append(data[5]);
          $('#lightbox-affiliate-url').attr('href', data[6]);
          if (data[2]) {
            $('#lightbox-learn-more').append(data[2]);
          } else {
            $('#lightbox-learn-more').append("Want to learn more? Check out this book we've picked for you:");
          }
          if (data[7]) {
            $('#lightbox-extracredit-container article').addClass("has-econstories-image");
          }
        }
        if (!data[2]) {
          $('#lightbox-learn-more').addClass("hide");
        }
        if (!(data[3].length > 2)) {
          $('#lightbox-extracredit-container').addClass("hide");
        }
      }
      return "done";
    };
    openLightbox = function() {
      var lightbox;
      lightbox = $("[data-remodal-id='lightbox']").remodal();
      lightbox.open();
      return $(document).on('closed', '#lightbox-container', function() {
        $('#lightbox-content #lightbox-oembed-container').empty();
        $('#lightbox-extracredit-container .entry-title').empty();
        $('#lightbox-extracredit-container .entry-author').empty();
        $('#lightbox-extracredit-container .entry-content').empty();
        $('#lightbox-affiliate-url').attr('href', "");
        $('#lightbox-learn-more').empty();
        $('#lightbox-extracredit-container').removeClass("hide");
        return $('#lightbox-learn-more').removeClass("hide");
      });
    };
    deleteAllThings = function() {};
    return errorFunction = function() {
      return console.log("Something didn't work");
    };
  })(jQuery);

}).call(this);
