$(window).on("load", function () {
  $("#index-about-button").animate(
    {
      opacity: 0,
      // left: "+=50",
    },
    0,
    function () {
      $(this).animate(
        {
          opacity: 1,
          // left: "-=50",
        },
        1000
      );
    }
  );

  setTimeout(function () {
    $("#index-contact-button").animate(
      {
        opacity: 0,
        // top: "-=50",
      },
      0,
      function () {
        $(this).animate(
          {
            opacity: 1,
            // top: "+=50",
          },
          1000
        );
      }
    );
  }, 400);

  setTimeout(function () {
    $("#index-portfolio-button").animate(
      {
        opacity: 0,
        // left: "-=50",
      },
      0,
      function () {
        $(this).animate(
          {
            opacity: 1,
            // left: "+=50",
          },
          1000
        );
      }
    );
  }, 800);
});
