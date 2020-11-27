(function ($) {
  $(window).on("load", function () {
    $("#loader-wrapper").hide();
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id == "forecast-section") {
      $("html,body").animate(
        {
          scrollTop: $("#forecast-section").offset().top,
        },
        3000
      );
    } else if (page_id == "Asset-opt") {
      $("html,body").animate(
        {
          scrollTop: $("#Asset-opt").offset().top,
        },
        3000
      );
    } else if (page_id == "portfolio") {
      $("html,body").animate(
        {
          scrollTop: $("#portfolio").offset().top - 100,
        },
        3000
      );
    } else if (page_id == "other-services") {
      $("html,body").animate(
        {
          scrollTop: $("#other-services").offset().top - 90,
        },
        3000
      );
    }
  });

  ("use strict"); // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(".arrow").click(function () {
  $(this).toggleClass("up");
});
