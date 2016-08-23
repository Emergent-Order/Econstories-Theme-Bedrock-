(function() {
  jQuery(document).ready(function($) {
    console.log("widont initiated");
    wt.fix({
      elements: '.widont',
      chars: 20,
      method: 'nbsp'
    });
  });

}).call(this);
