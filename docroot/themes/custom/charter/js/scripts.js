/**
 * @file
 * Behaviors for the charter theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.charter = {
    attach: function() {
      // charter JavaScript behaviors goes here.

        $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });

        $('.navbar .dropdown > a').click(function(){
          location.href = this.href;
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


