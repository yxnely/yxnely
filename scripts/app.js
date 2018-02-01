const nav = $("nav");
const style = "nav-scrolled";
const hdr = $("nav").height();
const windowsize = $(window).width();

$(window).scroll(() => {
	if( $(this).scrollTop() > hdr ) {
		nav.addClass(style);
	} else {
		nav.removeClass(style);
	}
});

$(".inner").mouseover(() => {
	$(".overlay p").show();
	$(".overlay span").show();
	$(".overlay h2").show();
	$(".overlay").css({
		"opacity": ".5",
		"background-color": "#222"
	});
});

if (windowsize <= 425) {
	$(".pull-left").remove();
};

$(() => {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 60
				}, 1000);
				
				return false;
			}
		}
	});
});

lightbox.option({
	'resizeDuration': 400,
	'wrapAround': true,
	// 'fitImagesInViewport': true,
	'disableScrolling': true,
	'positionFromTop': 50,
	'maxWidth': 800,
	'maxHeight': 600
});
