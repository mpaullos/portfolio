const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

stack = ["HTML5", "CSS3", "Javascript", "Bootstrap", "NodeJs", "Python3", "MongoDB", "JQuery", "SQL"];
$(".swiper-slide").click(function () {
  $(".html5").click(function () {
    $("#conhecimentos .teste").text(stack[0]);
  });

  $(".css3").click(function () {
    $("#conhecimentos .teste").text(stack[1]);
  });

  $(".js").click(function () {
    $("#conhecimentos .teste").text(stack[2]);
  });

  $(".bootstrap").click(function () {
    $("#conhecimentos .teste").text(stack[3]);
  });

  $(".nodejs").click(function () {
    $("#conhecimentos .teste").text(stack[4]);
  });
  $(".python").click(function () {
    $("#conhecimentos .teste").text(stack[5]);
  });
  $(".mongodb").click(function () {
    $("#conhecimentos .teste").text(stack[6]);
  });
  $(".jquery").click(function () {
    $("#conhecimentos .teste").text(stack[7]);
  });

  $(".sql").click(function () {
    $("#conhecimentos .teste").text(stack[8]);
  });
});

/* Translate */
$(".dropdown-menu").click(function () {
  const ptbr = $(".brazil-flag").attr("src");
  console.log(ptbr, "ptbr path");
  const en = $(".us-flag").attr("src");
  console.log(en, "en path");
  $(".brazil-flag").attr("src", `${en}`);
  $(".us-flag").attr("src", `${ptbr}`);
});
