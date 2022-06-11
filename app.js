$(function () {
  /*Vars*/

  let header = $("#header");
  let intro = $("#intro");
  let introH = $("#intro").innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToogle");

  // Fixed Header

  checkScroll(scrollPos);

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos);
  });

  function checkScroll(scrollPos) {
    if (scrollPos >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*NavToogle*/

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  /*Smooth scroll*/

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockID = $(this).data("scroll");
    let blockOffset = $(blockID).offset().top;
    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: blockOffset - 55,
      },
      600
    );
  });
});
