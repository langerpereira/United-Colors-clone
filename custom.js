$(document).ready(function(){
    $(".search-icon").click(function(){
        $(".slideIn-bar").slideToggle("slow");
    });

   let lastScrollTop = 0;

  $(window).on("scroll", function () {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      $(".navbar").slideUp(200);
    } else {
      $(".navbar").slideDown(200);
    }

    lastScrollTop = currentScroll;
  });

});


