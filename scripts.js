$(document).ready(function() {
    $('.theme-toggle').on('click', function() {
      $('body').toggleClass('dark-theme');
      const icon = $(this).find('i');
      icon.toggleClass('fa-sun fa-moon');
  
      if ($('body').hasClass('dark-theme')) {
        icon.css('transform', 'rotate(360deg)');
      } else {
        icon.css('transform', 'rotate(0deg)');
      }
    });
  });