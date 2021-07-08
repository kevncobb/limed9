/**
 * @file
 * Behaviors for the blue_harvest theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.blue_harvest = {
    attach: function() {
      // blue_harvest JavaScript behaviors goes here.
      $(".navbar-nav .dropdown").hover(
        function(){
          $(this).addClass("show");
          $("ul.dropdown-menu", this).addClass("show");
        },function(){
          $(this).removeClass("show");
          $("ul.dropdown-menu", this).removeClass("show");
      });
    }
  };
  Drupal.behaviors.focus_search_bar_when_opened = {
    attach: function (context, settings) {
      $(context).find('button.btn.search-button').on('click touchstart', function () {
        var focus = function () {
          $('form#search-block-form input.form-search').focus();
        };
        setTimeout(focus, 500);
      });
    }
  };

})(window.jQuery, window._, window.Drupal);


