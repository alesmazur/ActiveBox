$(function() {
    /*FixedHeader*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToogle");
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) { header.addClass("fixed"); } else { header.removeClass("fixed"); }
    });


    /*PageBookmarks*/


    $("[data-scroll]").on("click", function(event) {
            event.preventDefault();
            let blockID = $(this).data('scroll');
            let blockOffset = $(blockID).offset().top;
            nav.removeClass("show");

            console.log(blockOffset);
            $("html, body").animate({
                scrollTop: blockOffset - 55
            }, 700);

        })
        /*NavToogle*/

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
    /*SlickSlider*/
    let slider = $("#reviewsSlider");
});