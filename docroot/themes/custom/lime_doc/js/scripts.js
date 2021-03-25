/**
 * @file
 * Behaviors for the lime_doc theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.lime_doc = {
    attach: function() {
      // lime_doc JavaScript behaviors goes here.
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
