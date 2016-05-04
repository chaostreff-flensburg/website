// hide main logo & nav on scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.hideonscroll').addClass("hidden");
    }

    if ($(this).scrollTop() < 600) {
        $('.hideonscroll').removeClass("hidden");
    }
});
