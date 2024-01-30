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

/* knowledge */
stack = ["HTML5", "CSS3", "Javascript", "React", "Bootstrap", "NodeJs", "Python3", "Csharp", "MongoDB", "JQuery", "SQL"];

$(".html5").hover(
  function () {
    $("#conhecimentos .teste").text(stack[0]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".css3").hover(
  function () {
    $("#conhecimentos .teste").text(stack[1]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".js").hover(
  function () {
    $("#conhecimentos .teste").text(stack[2]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".react").hover(
  function () {
    $("#conhecimentos .teste").text(stack[3]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".bootstrap").hover(
  function () {
    $("#conhecimentos .teste").text(stack[4]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".nodejs").hover(
  function () {
    $("#conhecimentos .teste").text(stack[5]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".python").hover(
  function () {
    $("#conhecimentos .teste").text(stack[6]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".csharp").hover(
  function () {
    $("#conhecimentos .teste").text(stack[7]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".mongodb").hover(
  function () {
    $("#conhecimentos .teste").text(stack[8]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);
$(".jquery").hover(
  function () {
    $("#conhecimentos .teste").text(stack[9]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

$(".sql").hover(
  function () {
    $("#conhecimentos .teste").text(stack[10]);
  },
  function () {
    $("#conhecimentos .teste").text("");
  }
);

/* Translate */
check = true;
const navbarTranslate = $(".dropdown-menu").click(function () {
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
      Portfólio: "Portfolio",
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

const homeTranslate = $(".dropdown-menu").click(function () {
  if (!check) {
    $("#home h1").html("Hello, my name is <span>Marcos Paulo</span> <br />I am a <span>Front-End Developer</span>");
    $("#home p").html("<p>I built some websites in order to improve my skills. So I decided to condense these constructions into a single location. I have skills in <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>Bootstrap</span>, <span>Node.Js</span>, and <span>SQL</span>, for now!</p>");
  } else {
    $("#home h1").html("Olá, meu nome é <span>Marcos Paulo</span> <br />Eu sou um <span>Front-End Developer</span>");
    $("#home p").html("<p>Eu construí alguns sites com o intuito de melhorar as minhas habilidades. Então resolvi condensar essas construções em um único local. Possuo habilidades em <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>Bootstrap</span>, <span>Node.Js</span>, e <span>SQL</span>, por enquanto!</p>");
  }
});

const aboutTranslate = $(".dropdown-menu").click(function () {
  if (!check) {
    $("#sobre h4").html("Who am i");
    $("#sobre p").html("<p class='about'>My name is Marcos Paulo, but many call me 'MP' which is the abbreviation of my name, or my tag in terms of html. I started my first steps in programming like many, with a simple Hello World. I am currently looking for the first opportunity in the area of Web Development, despitehaving received a few 'no', programmers never give up. In addition, I am also an Information Systems student. Anyway, thanks for visiting!</p>");
  } else {
    $("#sobre h4").html("Quem sou");
    $("#sobre p").html("<p class='about'>Meu nome é Marcos Paulo, mas muitos me chamam de 'MP' que é a abreviação do meu nome, ou a minha tag em termos de html. Comecei meus primeiros passos na programação como muitos, com um simples Hello World. Atualmente procuro a primeira oportunidade na área de Desenvolvimento Web, apesarde ter recebido alguns 'nãos', programadores nunca desistem. Além disso, também sou estudante de Sistemas de Informação. No mais, obrigado pela visita!</p>");
  }
});

const portfolioTranslate = $(".dropdown-menu").click(function () {
  if (!check) {
    $("#portfolio h1").html("Projects<span> |<span>");
    $("#portfolio a").each((index, element) => {
      if (index % 2 == 0) {
        $(element).html("Visit");
      }
      if (index % 2 != 0) {
        $(element).html("Repository");
      }
    });
  } else {
    $("#portfolio h1").html("Projetos<span> |<span>");
    $("#portfolio a").each((index, element) => {
      if (index % 2 == 0) {
        $(element).html("Acesse");
      }
      if (index % 2 != 0) {
        $(element).html("Repositório");
      }
    });
  }
});

const knowledgeTranslate = $(".dropdown-menu").click(function () {
  if (!check) {
    $("#conhecimentos h1").html("<h1 class='text-center mt-5'>Knowledge <span>|</span> <span class='teste'></span></h1>");
  } else {
    $("#conhecimentos h1").html("<h1 class='text-center mt-5'>Conhecimentos <span>|</span> <span class='teste'></span></h1>");
  }
});

/* Navbar Collapse Fix */
const fixNavLinks = $("#navbarNav .nav-item").each((index, element) => {
  if (index === 7) {
    $(element).click(() => {
      $(".dropdown-item").click(() => {
        $("#navbarNav").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      });
    });
  } else {
    $(element).click(() => {
      $("#navbarNav").removeClass("show");
      $(".navbar-toggler").addClass("collapsed");
    });
  }
});

/* Scroll reveal */
const sr = ScrollReveal({
  distance: "50px",
  duration: 2000,
});

sr.reveal(".leftReveal", { origin: "left" }, { delay: 200 });
sr.reveal(".rightReveal", { origin: "right" }, { delay: 300 });
sr.reveal(".topReveal", { origin: "top" }, { delay: 400 });
sr.reveal(".bottomReveal", { origin: "bottom" }, { delay: 600 });

/* Copyright Date */

const date = new Date();
const currentYear = date.getFullYear();
$(".copyright").append(" - " + currentYear);
