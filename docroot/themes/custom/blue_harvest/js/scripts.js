/**
 * @file
 * Behaviors for the blue_harvest theme.
 */

(function($, _, Drupal) {
  Drupal.behaviors.blue_harvest = {
    attach: function() {
      // blue_harvest JavaScript behaviors goes here.

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
  // Youtube Modal
  Drupal.behaviors.stop_video_when_modal_closed = {
    attach: function (context, settings) {
      $(context).find('#youtubeModal').on('hidden.bs.modal', function () {
        $("#youtubeModal iframe").attr("src", $("#youtubeModal iframe").attr("src"));
      });
    }
  };

})(window.jQuery, window._, window.Drupal);


