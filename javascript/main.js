// hide main logo & nav on scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.hideonscroll').fadeOut();
    }

    if ($(this).scrollTop() < 600) {
        $('.hideonscroll').fadeIn();
    }
});


// smooth scrolling to anchors

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
