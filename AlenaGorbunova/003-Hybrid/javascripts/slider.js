$(function() {
  $('#project1').on('click', function() {
    $('#projectsWrapper').css('margin-left', '0');
    $('#circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project2').on('click', function() {
    $('#projectsWrapper').css('margin-left', '-100vw');
    $('#circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project3').on('click', function() {
    $('#projectsWrapper').css('margin-left', '-200vw');
    $('#circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
});
