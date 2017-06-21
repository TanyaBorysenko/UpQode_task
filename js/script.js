var map, center;
function initMap() {
    center = {lat: 49.8394845, lng: 24.0311947};
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });
}

$(document).ready(function () {

    // initialize carousel in top of page
    $('#main-carousel').carousel({
        interval: 3000,
        pause: null
    });

    // initialize carousel for products section
    $('#product_carousel').carousel({
        interval: 5000
    });

    // show/hide mobile menu if click on burger button
    var burgerBtn = $('#burger-btn'),
        nav = $('nav');
    burgerBtn.click(function() {
        burgerBtn.toggleClass('is-active');
        nav.toggleClass('active');
    });

    // select all links in navigation
    var links = $('nav a');
    links.click(function(event) {
        // prevent default action for link - open link in tab
        event.preventDefault();

        // get value from href attribute
        var attrHref = $(this).attr('href');

        // find block with selector got from href attribute
        var blockToScroll = $(attrHref);
        if (blockToScroll.length > 0) {
            // block if found and we can scroll to it
            var headerHeight = $('header').height();

            $('nav .active').removeClass('active');
            $(this).addClass('active');


            // scroll to element with animation 1sec + include header height because it overflow over block
            $('body').animate({
                scrollTop: blockToScroll.offset().top - headerHeight
            }, 1000);
        }
    });

});