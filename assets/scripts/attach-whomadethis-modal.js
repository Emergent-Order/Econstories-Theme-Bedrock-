(function() {
  jQuery(document).ready(function($) {
    var whomade;
    console.log("whomadethis loaded");
    whomade = $('#whomadethis-lightbox').remodal();
    $('.who-made-this').click(function() {
      e.preventDefault();
      return whomade.open();
    });
  });

}).call(this);
