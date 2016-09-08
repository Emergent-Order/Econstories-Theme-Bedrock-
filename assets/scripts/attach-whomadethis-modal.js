(function() {
  jQuery(document).ready(function($) {
    var whomade;
    console.log("whomadethis loaded");
    whomade = $('#whomadethis-lightbox').remodal();
    $('.who-made-this').on('click', function(event) {
      event.preventDefault();
      return whomade.open();
    });
  });

}).call(this);
