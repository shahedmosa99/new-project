var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
///////////////// circle
    let options = {
      startAngle: -1.55,
      size: 150,
      value: 0.85,
      fill: { gradient: ["rgb(36, 192, 101)", "rgb(41, 219, 115)"] },
    };
    $(".circle .bar")
      .circleProgress(options)
      .on("circle-animation-progress", function (event, progress, stepValue) {
        $(this)
          .parent()
          .find("span")
          .text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
    $(".js .bar").circleProgress({
      value: 0.7,
    });
    $(".react .bar").circleProgress({
      value: 0.6,
    });

///////////// navbar
 $(document).ready(function () {
   $(".btn").click(function () {
     $(".items").toggleClass("show");
     $("ul li").toggleClass("hide");
   });
 });