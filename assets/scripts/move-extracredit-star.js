(function() {
  $(function() {
    var $allTags;
    $allTags = $('.entry-categories');
    return $allTags.each(function() {
      var $extracredit;
      $extracredit = $(this).find('a[href*="extra-credit"]');
      $extracredit.siblings().addClass("extra-credit-star");
      return $extracredit.addClass("noDisplay");
    });
  });

}).call(this);
