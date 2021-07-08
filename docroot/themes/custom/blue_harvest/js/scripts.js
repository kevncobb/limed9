/**
 * @file
 * Behaviors for the blue_harvest theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.blue_harvest = {
    attach: function() {
      // blue_harvest JavaScript behaviors goes here.
      $(document).ready(function() {
        // executes when HTML-Document is loaded and DOM is ready

        // There is a little gap below the button so if you didn't have the timeout function delay it would remove the open class before you actually stop hovering the component.

        //sets timer variable
        var timer;

        // when the button and button menu are hovered
        $('.dropdown button, .dropdown-menu').hover(function() {

          // Clears the time on hover to prevent a que or waiting for the delay to finish from a previous hover event
          clearTimeout(timer);
          // Add the class .open and show the menu
          $('.dropdown').addClass('show');

        }, function() {

          // Sets the timer variable to run the timeout delay
          timer = setTimeout(function() {
            // remove the class .open and hide the submenu
            $('.dropdown').removeClass("show");
          }, 500);

        });

        // document ready
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


