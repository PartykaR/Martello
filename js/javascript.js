$(document).ready(function() {
	var NavY = $('.nav').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.nav').addClass('sticky');
	} else {
		$('.nav').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});

$(document).on('click', 'a', function (event) {
    event.preventDefault();
    $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(".scrollup").on("click", function () {
    $("body, html").animate({
        scrollTop: $("body").offset().top
    }, 1000)
});