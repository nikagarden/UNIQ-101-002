$(function() {
  $('.scrollTo').each(function() {
    $(this).on('click', function(e) {
      var scrollTo;
      e.preventDefault();
      scrollTo = $(this).attr('href');
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - 30
      }, 1000);
    });
  });
});
