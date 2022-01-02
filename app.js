$(function() {
    /*FixedHeader*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
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
        console.log(blockOffset);
        $("html, body").animate({
            scrollTop: blockOffset - 55
        }, 700);

    })


});