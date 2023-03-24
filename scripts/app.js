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
check = true;
$(".dropdown-menu").click(function () {
  const ptbr = $(".brazil-flag").attr("src");
  console.log(ptbr, "ptbr path");
  const en = $(".us-flag").attr("src");
  console.log(en, "en path");

  $(".nav-link").each((index, element) => {
    $(".brazil-flag").attr("src", `${en}`);
    $(".us-flag").attr("src", `${ptbr}`);
    // console.log(index, $(element).html());
    var navTranslate = {
      Inicio: "Home",
      Sobre: "About",
      Portifólio: "Portfolio",
      Conhecimentos: "Knowledge",
      Contato: "Contact",
    };
    var translateNavBar = Object.values(navTranslate)[index];
    var restoreNavBar = Object.keys(navTranslate)[index];
    if (check) {
      $(element).text(translateNavBar);
    } else {
      $(element).text(restoreNavBar);
    }
  });

  if (check) {
    $(".en-us span").text("pt-br");

    check = false;
  } else {
    $(".en-us span").text("en-us");
    check = true;
  }
});
