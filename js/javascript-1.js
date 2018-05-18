$(document).on('click', 'a', function (event) {
    event.preventDefault();
    $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});