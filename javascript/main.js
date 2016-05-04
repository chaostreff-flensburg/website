// hide main logo & nav on scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.hideonscroll').fadeOut();
    }

    if ($(this).scrollTop() < 600) {
        $('.hideonscroll').fadeIn();
    }
});
