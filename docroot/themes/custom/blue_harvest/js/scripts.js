/**
 * @file
 * Behaviors for the blue_harvest theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.blue_harvest = {
    attach: function() {
      // blue_harvest JavaScript behaviors goes here.
    }
  };
  Drupal.behaviors.focus_search_bar_when_opened = {
    attach: function (context, settings) {
      $(context).find('button.btn.search-button').on('click touchstart', function () {
        //event.stopPropagation();
        //event.preventDefault();
        var focus = function(){
          $('form#search-block-form input.form-search').focus();
        };
        setTimeout(focus, 500);
      });
    }
  };
})(window.jQuery, window._, window.Drupal);
