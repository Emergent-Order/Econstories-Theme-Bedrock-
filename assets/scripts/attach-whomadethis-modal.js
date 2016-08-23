(function() {
  jQuery(document).ready(function($) {
    var whomade;
    console.log("whomadethis loaded");
    whomade = $('#whomadethis-lightbox').remodal();
    $('.who-made-this a').click(function() {
      return whomade.open();
    });
  });

}).call(this);
