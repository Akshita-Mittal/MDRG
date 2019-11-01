 /* Scroll down */
 $(function() {
    $('#arrowDown').click (function() {
      $('html, body').animate({scrollTop: $('#secondSection').offset().top }, 'slow');
      return false;
    });
  });


$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});


$("#owl-servey").owlCarousel({
    nav: true,
    dots: false,
    items: 1,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true
});

$("#owl-resource").owlCarousel({
    nav: true,
    dots: false,
    items: 1,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true
});





