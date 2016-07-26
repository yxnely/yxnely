var nav = $("nav");
    style = "nav-scrolled";
    hdr = $("nav").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    nav.addClass(style);
  } else {
    nav.removeClass(style);
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
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
  'fitImagesInViewport': true,
  'disableScrolling': true,
  'positionFromTop': 50,
  'maxWidth': 800,
  'maxHeight': 600
})
