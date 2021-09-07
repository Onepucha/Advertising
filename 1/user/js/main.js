function windowSize() {
  if (window.screen.width >= 720) {
    scrollSticky();
  }
}

function gotoFrame(sFrameId, event) {
  if (sFrameId != "") {
    var jxFrame = CL.axSlides.find("frame[id='" + sFrameId + "']");
    var jxSlide = jxFrame.parents("slide:first");
    sSlideId = jxSlide.attr("id");
    if (jxSlide.attr("id") != CLZ.sCurrentSlideId) {
      CL.Open.Slide({
        slideid: sSlideId,
      });
      if (!CLF[sFrameId].bIsFirst) {
        CLF[sFrameId].Start();
      }
    } else {
      CLF[sFrameId].Start();
    }
  }
}

function contents() {
  $(".lmm-menu__content .lmm-menu__nav-item.active").removeClass("active");
  current = $("#contents_old .slide-item.current").index();
  $(".lmm-menu__content .lmm-menu__nav-item").eq(current).addClass("active");

  $("#contents_old_default .unvisited")
    .removeClass("allowed")
    .addClass("forbidden")
    .off();

  $("#contents_old .slide-item").filter(function () {
    if (
      ($(this).hasClass("visited") || $(this).hasClass("current")) &&
      !$(this).next().hasClass("forbidden") &&
      !$(this).hasClass("next_open") &&
      $(this).index() != $("#contents_old .slide-item").length - 1
    ) {
      $(this).addClass("next_open");
    }
  });
}

function Names() {
  var FirstName = $(".lmm-input__start").val();
  CLJ.FirstName.nRawScore = FirstName;
}

function progressBar() {
  removeBgFon();
  commonProgress();
  setTextTails();
  var current_frame = $(".cl-scale.cl-scale-var").width();
  var total_frame = $(".cl-bar.cl-bar-var").width();
  $(".lmm-progress").css({
    width: (total_frame / current_frame) * 100 + "%",
  });
}

var EventBus = new Vue({
  data: {
    var: [],
  },

});

var InitMenu = function () {
  new Vue({
    el: "#lmm-menu",
    data: {
      materials: [{
        name: "Шаблон заявки на оформление постоянного пропуска сотрудника и пропуска на ТрС ЦО Калитники",
        format: "pdf,",
        size: "110 Кб",
        link: "images/loop1-1__loop.pdf",
        fileClass: "",
      }],
      menuItems: [{
          name: "Слайд 1",
          id: "SLIDE_4",
          disabled: false,
          subtopic: false,
        },
        {
          name: "Слайд 2",
          id: "SLIDE_5",
          disabled: false,
          subtopic: false,
        },
        {
          name: "Слайд 3",
          id: "SLIDE_8",
          disabled: false,
          subtopic: false,
        },
        {
          name: "Слайд 4",
          id: "SLIDE_6",
          disabled: false,
          subtopic: false,
        },
        {
          name: "Слайд 5",
          id: "SLIDE_9",
          disabled: false,
          subtopic: false,
        }
      ],
      glossary: [{
          name: "Автомобильная парковка БЦ «Оазис»",
          description: "специально обозначенное, обустроенное и оборудованное место, являющееся частью здания БЦ «Оазис», предназначенное для организованной стоянки транспортных средств на платной основе или без взимания платы по решению собственника здания.",
        },
        {
          name: "Автомобильная парковка ЦО «Добрынинский»",
          description: "специально обозначенное, обустроенное и оборудованное место, являющееся частью автомобильной парковки БЦ «Оазис», переданное Х5 на основании договора аренды, предназначенное для организованной стоянки транспортных средств, находящихся на балансе Х5, и транспортных средств сотрудников Х5. ",
        }
      ],
    },
  });
};

var LMMComponentsInit = {
  InitMenu: InitMenu,
  Init: function () {
    this.InitMenu();
    fullName = CLLMS.API.GetValue("cmi.learner_name");
  },
};

var CourseStore = {
  getExerciseData: function (exercise_name) {
    var session_data = sessionStorage.getItem("course_store_data");

    if (session_data === null) {
      return;
    }

    try {
      return JSON.parse(session_data)[exercise_name];
    } catch (e) {
      return;
    }
  },
  setExerciseData: function (exercise_name, exercise_data) {
    var session_data = sessionStorage.getItem("course_store_data");

    if (session_data === null) {
      session_data = {};
    } else {
      try {
        session_data = JSON.parse(session_data);
      } catch (e) {
        return;
      }
    }

    session_data[exercise_name] = exercise_data;
    sessionStorage.setItem("course_store_data", JSON.stringify(session_data));
  },
};

//Анимация при скролле
function onScrollContent() {
  var contentHeight = $(".lmm-overflow-y-auto:visible")[0].clientHeight;

  setTimeout(function () {
    setTextTails();
  }, 250);

  $(".lmm-overflow-y-auto:visible").on("scroll", function () {
    $(".animated:visible").each(function () {
      var offset_top = $(this).offset().top;
      var animItem = $(this).hasClass("hidden");
      if (offset_top < contentHeight / 1.5 && animItem) {
        $(this).eq(0).removeClass("hidden");
      }
    });

    $(".animation").each(function () {
      var offset_top = $(this).offset().top;
      var show_attr = $(this).attr("show-attr") == "true";

      if (offset_top < contentHeight / 1 && show_attr) {
        slide_anim($(this).attr("id"));
        $(this).attr("show-attr", "false");
      }
    });



    if (window.screen.width >= 719) {
      scrollSticky();
    }

  });
}

function slide_anim(id) {
  var svgContainer = document.getElementById(id);

  var rellax = new Rellax(svgContainer, {
    horizontal: true,
    vertical: true,
    round: true,
    wrapper: '.lmm-overflow-y-auto'
  });
}



function passBall() {
  var test_score = CLV.oSlide["test_score"];

  $(".lmm-results span.test_score").html(CLV.oSlide["test_score"]);
  $(".lmm-results span.try_test").html(CLJ["test_cont"].nRawScore);

  if (test_score > max) {
    max = test_score;
    CLJ["test_q"].nRawScore = Math.round(max);
    CLJ["total"].nRawScore = Math.round((max * 100) / 10);
  }

  if (Math.round((test_score * 100) / 10) == 100) {
    $(".lmm-results span.results").html("Это отличный результат, поздравляю!");
    $("#nav_block").hide();
    $(".lmm-results a").eq(0).removeClass("lmm-display__none");
    $(".lmm-results a").eq(1).addClass("lmm-display__none");
    $(".lmm-results a").eq(2).addClass("lmm-display__none");
    $(".lmm-results a").eq(3).addClass("lmm-display__none");
    $(".lmm-results a").eq(4).addClass("lmm-display__none");
  } else if (Math.round((test_score * 100) / 10) >= 70) {
    $(".lmm-results span.results").html(
      "Это отличный результат, поздравляю! Рекомендуем тебе пройти тест еще раз,<br> чтобы улучшить свой результат!"
    );
    $("#nav_block").hide();
    $(".lmm-results a").eq(0).removeClass("lmm-display__none");
    $(".lmm-results a").eq(1).removeClass("lmm-display__none");
    $(".lmm-results a").eq(3).addClass("lmm-display__none");
    $(".lmm-results a").eq(4).addClass("lmm-display__none");
  } else {
    $(".lmm-results span.results").html(
      "Это не очень хороший результат, мы рекомендуем тебе изучить курс еще раз."
    );
    $("#nav_block").hide();
    $(".lmm-results a").eq(3).removeClass("lmm-display__none");
    $(".lmm-results a").eq(4).removeClass("lmm-display__none");
    $(".lmm-results a").eq(0).addClass("lmm-display__none");
    $(".lmm-results a").eq(1).addClass("lmm-display__none");
  }

  CLJ["test_cont"].nRawScore = parseInt(CLJ["test_cont"].nRawScore) + 1;
  var try_count = parseInt(CLJ["test_cont"].nRawScore);

  if (try_count == 1) {
    CLJ["test_try1"].nRawScore = test_score;
  } else if (try_count == 2) {
    CLJ["test_try2"].nRawScore = test_score;
  } else if (try_count >= 3) {
    CLJ["test_try3"].nRawScore = test_score;
    $(".lmm-results a").eq(0).addClass("lmm-display__none");
    $(".lmm-results a").eq(1).addClass("lmm-display__none");
    $(".lmm-results a").eq(3).addClass("lmm-display__none");
    $(".lmm-results a").eq(4).addClass("lmm-display__none");
    $(".lmm-results a").eq(2).removeClass("lmm-display__none");
  }
}

function nameData() {
  var test_score = CLV.oSlide["test_score"];
  user_name = CLLMS.API.GetValue("cmi.learner_name");
  date = new Date();
  $(".lmm-results span.user-name").html(user_name);
  $(".lmm-results span.date").html(
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
  );
  $(".lmm-results span.current-percent").html(
    Math.round((test_score * 100) / 10) + "%"
  );
  $(".lmm-results span.best-percent").html(
    parseInt(CLJ["total"].nRawScore) + "%"
  );
  // $('.results span.percent').html(parseInt(CLJ['total'].nRawScore) + '%');
}

function modulNames() {

  var current_frame = $("span.cl-slide-name").text();
  $(".subject").text(current_frame);
}

function SetFeedback() {
  $(".lmm-icon__menu").removeClass("disabled");
  var max = parseInt(CLJ["test_q"].nRawScore);
  var test_score = CLV.oSlide["test_score"];
  $(".total-count").html(CLV.oSlide["test_score"]);
  if (test_score > max) {
    max = test_score;
    CLJ["test_q"].nRawScore = Math.round(max);
    CLJ["total"].nRawScore = Math.round((max * 100) / 15);
  }
  if (test_score >= 13) {
    $(".lmm-feedback.incorrect").hide();
    $(".lmm-feedback.correct").show();
  } else {
    $(".lmm-feedback.correct").hide();
    $(".lmm-feedback.incorrect").show();
  }
}

var slider_obj = {};


function change_viewport() {
  if (window.screen.width >= 720) {
    $("meta[name = viewport]").attr(
      "content",
      "width=1000, initial-scale=1, maximum-scale=1, user-scalable=1"
    );
  } else {
    $("meta[name = viewport]").attr(
      "content",
      "width=device-width, initial-scale=1"
    );
  }
}

function setModalMaxHeight(element) {
  this.$element = $(element);
  this.$content = this.$element.find(".lmm-modal__content");
  var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin = $(window).width() < 719 ? 25 : 10;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var maxHeight = contentHeight;

  this.$content.css({
    overflow: "hidden",
  });

  this.$element.find(".modal-body").css({
    "max-height": maxHeight,
    "overflow-y": "auto",
  });
}

// Fixed  menu
var hideMenu = function () {
  var menu = document.querySelector("#p_player"),
    scrollPrev = 0,
    scrolled = 0;

  $(".lmm-overflow-y-auto:visible").on("scroll", function () {
    onScroll();
  });

  // window.addEventListener("scroll", onScroll);
  function onScroll() {
    var scrolled = $(".lmm-overflow-y-auto:visible").scrollTop();
    showNav();
    if (scrolled > scrollPrev && scrolled > 75) {
      hideNav();
    } else {
      if (scrollPrev !== scrolled) {
        showNav();
      }
    }
    scrollPrev = scrolled;
  }

  function hideNav() {
    document.querySelector("#p_player").classList.remove("is-visible");
    document.querySelector("#p_player").classList.add("is-hidden");
  }

  function showNav() {
    document.querySelector("#p_player").classList.remove("is-hidden");
    document.querySelector("#p_player").classList.add("is-visible");
    document.querySelector("#p_player").classList.add("scrolling");
  }
};

// setTimeout(hideMenu, 200);





var scrollSticky = function () {
  var headerHeight = $('.header').outerHeight();

  $('.sticky-container').each(function (i) {
    var ethalon = $(this).find('.ethalon');
    var fixio = $(this).find('.fixio');

    var ethalonOT = ethalon.offset().top - headerHeight - 110;

    if (ethalonOT > 0) {
      return fixio.css('margin-top', '0px');
    }

    var fixioHeight = fixio.outerHeight();
    var ethalonHeight = ethalon.height();
    var fixioMT = ethalonOT * -1;

    if (ethalonHeight <= fixioMT || fixioMT + fixioHeight >= ethalonHeight) {
      return;
    }

    fixio.css('margin-top', ethalonOT * -1 + 'px');
  });
};

// Swiper

function swiper() {
  setTimeout(function () {
    window.swiper0 = new Swiper('.swiper0', {
      nextButton: '.swiper .swiper-button-next.swiper-button-0',
      prevButton: '.swiper .swiper-button-prev.swiper-button-0',
      pagination: '.swiper-pagination0',
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      simulateTouch: false,
      initialSlide: 0,
      effect: 'fade',
      fade: {
        crossFade: true
      },
      onInit: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlideNextEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlidePrevEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
    });


    window.swiper1 = new Swiper('.swiper1', {
      nextButton: '.swiper .swiper-button-next.swiper-button-1',
      prevButton: '.swiper .swiper-button-prev.swiper-button-1',
      pagination: '.swiper-pagination1',
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      simulateTouch: false,
      initialSlide: 0,
      effect: 'fade',
      fade: {
        crossFade: true
      },
      onInit: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlideNextEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlidePrevEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
    });

    window.swiper2 = new Swiper('.swiper2', {
      nextButton: '.swiper .swiper-button-next.swiper-button-2',
      prevButton: '.swiper .swiper-button-prev.swiper-button-2',
      pagination: '.swiper-pagination2',
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      simulateTouch: false,
      initialSlide: 0,
      effect: 'fade',
      fade: {
        crossFade: true
      },
      onInit: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlideNextEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlidePrevEnd: function () {
        removeHalogram();
        removeHalogramHover();
      }
    });

    window.swiper3 = new Swiper('.swiper3', {
      nextButton: '.swiper .swiper-button-next.swiper-button-3',
      prevButton: '.swiper .swiper-button-prev.swiper-button-3',
      pagination: '.swiper-pagination3',
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      simulateTouch: false,
      initialSlide: 0,
      effect: 'fade',
      fade: {
        crossFade: true
      },
      onInit: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlideNextEnd: function () {
        removeHalogram();
        removeHalogramHover();
      },
      onSlidePrevEnd: function () {
        removeHalogram();
        removeHalogramHover();
      }
    });
  }, 0)
}


function commonProgress() {
  var current_task = CLJ.total_progress.nRawScore;
  var total_task = 22;

  // Общий прогресс курса по голограммам и диалогам
  $(".slider__progress.total_progress").css({
    width: (current_task * 100) / total_task + "%",
  });

  // Общий прогресс курса по голограммам и диалогам на слайде с кнопкой
  $(".women-progress .slider .slider__progress").css({
    width: (current_task * 100) / total_task + "%",
  });

  // Общий прогресс курса по голограммам и диалогам
  $({
    numberValue: 0
  }).animate({
    numberValue: (current_task * 100) / total_task
  }, {
    duration: 1000,
    easing: "linear",
    step: function (val) {
      $(".total_progress_percent").html(Math.ceil(val) + '%');
    }
  });
}

function commonProgressRequirements() {
  var total_requirements = 15;

  // Общие требования
  $(".slider__container-thumb--thumb.total_requirements").css({
    left: (7.5 - (CLJ.total_requirements.nRawScore)) * 100 / total_requirements + '%'
  });
}

function commonProgressAlcohol() {
  var total_alcohol = 21;
  var total_requirements = 15;

  // Общие требования
  $(".slider__container-thumb--thumb.total_requirements:visible").css({
    left: (7.5 - (CLJ.total_requirements.nRawScore)) * 100 / total_requirements + '%',
    transition: '0s'
  });

  // Алкоголь
  $(".slider__container-thumb--thumb.total_alcohol").css({
    left: (10.5 - (CLJ.total_alcohol.nRawScore)) * 100 / total_alcohol + '%'
  });
}

function commonProgressActivities() {
  var total_requirements = 15;
  var total_alcohol = 21;
  var total_activities = 11;


  // Общие требования
  $(".slider__container-thumb--thumb.total_requirements:visible").css({
    left: (7.5 - (CLJ.total_requirements.nRawScore)) * 100 / total_requirements + '%',
    transition: '0s'
  });

  // Алкоголь
  $(".slider__container-thumb--thumb.total_alcohol").css({
    left: (10.5 - (CLJ.total_alcohol.nRawScore)) * 100 / total_alcohol + '%',
    transition: '0s'
  });

  // Стимулирующие мероприятия
  $(".slider__container-thumb--thumb.total_activities").css({
    left: (5.5 - (CLJ.total_activities.nRawScore)) * 100 / total_activities + '%'
  });
}


function removeBgFon() {
  var defaultImg = $('.fon-1');
  var defaultImgFon2 = $('.fon-2');
  var defaultImgFon3 = $('.fon-3');



  if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1 && CLJ.failure_day_third.nRawScore == 1) {
    defaultImg.addClass('fon-dummy veryBadFon');
    defaultImgFon3.addClass('fon-dummy removed3');
  } else if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1 && CLJ.failure_day_third.nRawScore == 1) {
    defaultImg.addClass('fon-dummy removed3');
    defaultImgFon2.addClass('fon-dummy removed3_fon2');
    defaultImgFon3.addClass('fon-dummy removed3');
  } else if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1) {
    defaultImg.addClass('fon-dummy removed2');
    defaultImgFon2.addClass('fon-dummy removed2_fon2');
    defaultImgFon3.addClass('fon-dummy removed2');
  } else if (CLJ.failure_day_first.nRawScore == 1) {
    defaultImg.addClass('fon-dummy removed1');
    defaultImgFon2.addClass('fon-dummy removed1_fon2');
    defaultImgFon3.addClass('fon-dummy removed1');
  } else if (CLJ.failure_day_second.nRawScore == 1) {
    defaultImg.addClass('fon-dummy removed1');
    defaultImgFon2.addClass('fon-dummy removed1_fon2');
    defaultImgFon3.addClass('fon-dummy removed1');
  } else if (CLJ.failure_day_third.nRawScore == 1) {
    defaultImg.addClass('fon-dummy removed1');
    defaultImgFon2.addClass('fon-dummy removed1_fon2');
    defaultImgFon3.addClass('fon-dummy removed1');
  } else {
    defaultImg.removeClass('fon-dummy removed1 removed2 removed3 veryBadFon overlay__full overlay__removed1 overlay__removed');
    defaultImgFon2.removeClass('fon-dummy removed1_fon2 removed2_fon2 removed3_fon2');
    defaultImgFon3.removeClass('fon-dummy removed1 removed2 removed3 veryBadFon');
  }
}


function fadeRemoveBgFonFull() {
  var defaultImg = $('.fon-1:visible');
  if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1) {
    defaultImg.addClass('overlay__removed2');
    defaultImg.addClass('first', 250);
    defaultImg.addClass('second', 500);
    defaultImg.removeClass('overlay__removed2 first second', 750);
  } else if (CLJ.failure_day_first.nRawScore == 1 || CLJ.failure_day_second.nRawScore == 1 || CLJ.failure_day_third.nRawScore == 1) {
    defaultImg.addClass('overlay__removed1');
    defaultImg.addClass('first', 250);
    defaultImg.addClass('second', 500);
    defaultImg.removeClass('overlay__removed1 first second', 750);
  } else {
    defaultImg.addClass('overlay__full');
    defaultImg.addClass('first', 250);
    defaultImg.addClass('second', 500);
    defaultImg.removeClass('overlay__full first second', 750);
  }
}

function finalRemoveBgFon() {
  var defaultImgFinal = $('.fon-1.final');
  var perDefault = $('.pers-container.final');

  if (CLJ.failure_day_first.nRawScore == 1 &&
    CLJ.failure_day_second.nRawScore == 1 &&
    CLJ.failure_day_third.nRawScore == 1) {
    defaultImgFinal.addClass('fon-dummy veryBadFon');
    perDefault.addClass('veryBad');
    $('.speech .finalFeedback').html('Не получился проект, жаль... Ты всегда сможешь вернуться сюда и посмотреть материалы и теорию, может, поймёшь, что мы сделали не так. Либо вернуться во времени и начать всё сначала.');
  } else if (
    (CLJ.failure_day_first.nRawScore == 1 &&
      CLJ.failure_day_second.nRawScore == 1) ||
    (CLJ.failure_day_first.nRawScore == 1 &&
      CLJ.failure_day_third.nRawScore == 1) ||
    (CLJ.failure_day_second.nRawScore == 1 &&
      CLJ.failure_day_first.nRawScore == 1) ||
    (CLJ.failure_day_second.nRawScore == 1 &&
      CLJ.failure_day_third.nRawScore == 1) ||
    (CLJ.failure_day_third.nRawScore == 1 &&
      CLJ.failure_day_second.nRawScore == 1) ||
    (CLJ.failure_day_third.nRawScore == 1 &&
      CLJ.failure_day_second.nRawScore == 1)) {
    CLJ.total.nRawScore = 33;
    defaultImgFinal.addClass('fon-dummy averageFon');
    perDefault.addClass('average');
    $('.speech .finalFeedback').html('Это было сложно, но мы справились! Ты всегда сможешь вернуться сюда и посмотреть материалы и теорию, чтобы вспомнить их. А ещё можешь вернуться во времени и сделать всё идеально, но тогда прогресс обнулится.');
  } else if (CLJ.failure_day_first.nRawScore == 1 || CLJ.failure_day_second.nRawScore == 1 || CLJ.failure_day_third.nRawScore == 1) {
    CLJ.total.nRawScore = 66;
    defaultImgFinal.addClass('fon-dummy averageFon');
    perDefault.addClass('average');
    $('.speech .finalFeedback').html('Это было сложно, но мы справились! Ты всегда сможешь вернуться сюда и посмотреть материалы и теорию, чтобы вспомнить их. А ещё можешь вернуться во времени и сделать всё идеально, но тогда прогресс обнулится.');
  } else {
    CLJ.total.nRawScore = 100;
    perDefault.addClass('veryGood');
    $('.speech .finalFeedback').html('Вау, мы справились и создали идеального маркетолога! Когда захочешь увидеть его — просто посмотри в зеркало. <br><br>Ты всегда сможешь вернуться сюда и посмотреть материалы и теорию. А ещё можешь вернуться во времени и повторить свой успех (но текущий прогресс обнулится).');
  }
}

function progressPersRemoved() {
  var defaultPers = $('.pers-container.women:visible');

  if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1 && CLJ.failure_day_third.nRawScore == 1) {
    defaultPers.addClass('fon-dummy removed3');
  } else if (CLJ.failure_day_first.nRawScore == 1 && CLJ.failure_day_second.nRawScore == 1) {
    defaultPers.addClass('fon-dummy removed2');
  } else if (CLJ.failure_day_first.nRawScore == 1) {
    defaultPers.addClass('fon-dummy removed1');
  } else {
    defaultPers.removeClass('fon-dummy removed1 removed2 removed3');
  }
}

function openNextTabletDay1() {
  var slide = $('#TXT_22 .swiper .swiper1 .swiper-slide__content');
  var pagination = $('#TXT_22 .swiper .swiper-pagination1 .swiper-pagination-bullet');
  var stateTab = $('#TXT_22 .tablet__items-item');

  if (CLJ.hologram_1_1.nRawScore == 1 || CLV.oGlobal["activeStateDay1_1"] == 1) {
    $('#TXT_22 .swiper-slide.disabled').removeClass('disabled');
    $('#TXT_22 .tablet__items-item.disabled').removeClass('disabled').addClass('active');
  }

  if (CLJ.hologram_1_1.nRawScore == 1) {
    swiper1.slideTo(1, 0, true);

    if (CLV.oGlobal["exercise_1"] == 1) {
      pagination.eq(0).addClass('swiper-pagination-bullet-correct');
      slide.eq(0).addClass('correct');
    } else {
      pagination.eq(0).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(0).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }
  if (CLJ.hologram_1_2.nRawScore == 1) {
    swiper1.slideTo(1, 0, true);

    if (CLV.oGlobal["exercise_2"] == 1) {
      pagination.eq(1).addClass('swiper-pagination-bullet-correct');
      slide.eq(1).addClass('correct');
    } else {
      pagination.eq(1).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(1).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }

  if (CLV.oGlobal["activeStateDay1_1"] == 1) {
    stateTab.eq(0).removeClass('active').addClass('correct');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay1_1"] == 2) {
    stateTab.eq(0).removeClass('active').addClass('incorrect');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_1_1.nRawScore == 1) {
    stateTab.eq(0).removeClass('active');
  } else if (CLJ.chapter_1_1.nRawScore == 0) {
    stateTab.eq(0).removeClass('correct incorrect').addClass('active');
    stateTab.eq(1).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(2).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(3).removeClass('correct incorrect').addClass('lock');
  }

  if (CLV.oGlobal["activeStateDay1_2"] == 1) {
    stateTab.eq(1).removeClass('active').addClass('correct');
    stateTab.eq(2).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay1_2"] == 2) {
    stateTab.eq(1).removeClass('active').addClass('incorrect');
    stateTab.eq(2).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_1_2.nRawScore == 1) {
    stateTab.eq(1).removeClass('active');
  }

  if (CLV.oGlobal["activeStateDay1_3"] == 1) {
    stateTab.eq(2).removeClass('active').addClass('correct');
    stateTab.eq(3).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay1_3"] == 2) {
    stateTab.eq(2).removeClass('active').addClass('incorrect');
    stateTab.eq(3).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_1_3.nRawScore == 1) {
    stateTab.eq(2).removeClass('active');
  }

  if (CLV.oGlobal["activeStateDay1_4"] == 1) {
    stateTab.eq(3).removeClass('active').addClass('correct');
  } else if (CLV.oGlobal["activeStateDay1_4"] == 2) {
    stateTab.eq(3).removeClass('active').addClass('incorrect');
  } else if (CLJ.chapter_1_4.nRawScore == 1) {
    stateTab.eq(3).removeClass('active');
  }
}

function openNextTabletDay2() {
  var slide = $('#TXT_31 .swiper .swiper2 .swiper-slide__content');
  var pagination = $('#TXT_31 .swiper .swiper-pagination2 .swiper-pagination-bullet');
  var stateTab = $('#TXT_31 .tablet__items-item');

  if (CLJ.hologram_2_1.nRawScore == 1 || CLV.oGlobal["activeStateDay2_1"] == 1) {
    $('#TXT_31 .swiper-slide.disabled').removeClass('disabled');
    $('#TXT_31 .tablet__items-item.disabled').removeClass('disabled').addClass('active');
  }


  if (CLJ.hologram_2_1.nRawScore == 1) {
    swiper2.slideTo(1, 0, true);

    if (CLV.oGlobal["exercise_3"] == 1) {
      pagination.eq(0).addClass('swiper-pagination-bullet-correct');
      slide.eq(0).addClass('correct');
    } else {
      pagination.eq(0).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(0).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }
  
  // if (CLJ.hologram_2_3.nRawScore == 1) {
  //   swiper2.slideTo(3, 0, true);

  //   if (CLV.oGlobal["exercise_5"] == 1) {
  //     pagination.eq(2).addClass('swiper-pagination-bullet-correct');
  //     slide.eq(2).addClass('correct');
  //   } else {
  //     pagination.eq(2).addClass('swiper-pagination-bullet-incorrect');
  //     slide.eq(2).addClass('incorrect');
  //   }
  // } else {
  //   $('.swiper-slide__content').each(function () {
  //     $(this).removeClass('correct incorrect');
  //   });
  // }
  if (CLJ.hologram_2_4.nRawScore == 1) {
    swiper2.slideTo(2, 0, true);

    if (CLV.oGlobal["exercise_6"] == 1) {
      pagination.eq(1).addClass('swiper-pagination-bullet-correct');
      slide.eq(1).addClass('correct');
    } else {
      pagination.eq(1).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(1).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }
  if (CLJ.hologram_2_5.nRawScore == 1) {
    swiper2.slideTo(3, 0, true);

    if (CLV.oGlobal["exercise_7"] == 1) {
      pagination.eq(2).addClass('swiper-pagination-bullet-correct');
      slide.eq(2).addClass('correct');
    } else {
      pagination.eq(2).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(2).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }
  if (CLJ.hologram_2_6.nRawScore == 1) {
    swiper2.slideTo(4, 0, true);

    if (CLV.oGlobal["exercise_8"] == 1) {
      pagination.eq(3).addClass('swiper-pagination-bullet-correct');
      slide.eq(3).addClass('correct');
    } else {
      pagination.eq(3).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(3).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }

  if (CLJ.hologram_2_2.nRawScore == 1) {
    swiper2.slideTo(4, 0, true);

    if (CLV.oGlobal["exercise_11"] == 1) {
      pagination.eq(4).addClass('swiper-pagination-bullet-correct');
      slide.eq(4).addClass('correct');
    } else {
      pagination.eq(4).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(4).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }

  if (CLV.oGlobal["activeStateDay2_1"] == 1) {
    stateTab.eq(0).removeClass('active').addClass('correct');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay2_1"] == 2) {
    stateTab.eq(0).removeClass('active').addClass('incorrect');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_2_1.nRawScore == 1) {
    stateTab.eq(0).removeClass('active');
  } else if (CLJ.chapter_2_1.nRawScore == 0) {
    stateTab.eq(0).removeClass('correct incorrect').addClass('active');
    stateTab.eq(1).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(2).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(3).removeClass('correct incorrect').addClass('lock');
  }

  if (CLV.oGlobal["activeStateDay2_2"] == 1) {
    stateTab.eq(1).removeClass('active').addClass('correct');
    stateTab.eq(2).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay2_2"] == 2) {
    stateTab.eq(1).removeClass('active').addClass('incorrect');
    stateTab.eq(2).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_2_2.nRawScore == 1) {
    stateTab.eq(1).removeClass('active');
  }

  if (CLV.oGlobal["activeStateDay2_3"] == 1) {
    stateTab.eq(2).removeClass('active').addClass('correct');
    stateTab.eq(3).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay2_3"] == 2) {
    stateTab.eq(2).removeClass('active').addClass('incorrect');
    stateTab.eq(3).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_2_3.nRawScore == 1) {
    stateTab.eq(2).removeClass('active');
  }

  if (CLV.oGlobal["activeStateDay2_4"] == 1) {
    stateTab.eq(3).removeClass('active').addClass('correct');
  } else if (CLV.oGlobal["activeStateDay2_4"] == 2) {
    stateTab.eq(3).removeClass('active').addClass('incorrect');
  } else if (CLJ.chapter_2_4.nRawScore == 1) {
    stateTab.eq(3).removeClass('active');
  }
}


function openNextTabletDay3() {
  var slide = $('#TXT_50 .swiper .swiper3 .swiper-slide__content');
  var pagination = $('#TXT_50 .swiper .swiper-pagination3 .swiper-pagination-bullet');
  var stateTab = $('#TXT_50 .tablet__items-item');

  if (CLJ.hologram_3_1.nRawScore == 1 || CLV.oGlobal["activeStateDay3_1"] == 1) {
    $('#TXT_50 .swiper-slide.disabled').removeClass('disabled');
    $('#TXT_50 .tablet__items-item.disabled').removeClass('disabled').addClass('active');
  }

  if (CLJ.hologram_3_1.nRawScore == 1) {
    swiper3.slideTo(1, 0, true);

    if (CLV.oGlobal["exercise_9"] == 1) {
      pagination.eq(0).addClass('swiper-pagination-bullet-correct');
      slide.eq(0).addClass('correct');
    } else {
      pagination.eq(0).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(0).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }
  if (CLJ.hologram_3_2.nRawScore == 1) {
    swiper3.slideTo(2, 0, true);

    if (CLV.oGlobal["exercise_10"] == 1) {
      pagination.eq(1).addClass('swiper-pagination-bullet-correct');
      slide.eq(1).addClass('correct');
    } else {
      pagination.eq(1).addClass('swiper-pagination-bullet-incorrect');
      slide.eq(1).addClass('incorrect');
    }
  } else {
    $('.swiper-slide__content').each(function () {
      $(this).removeClass('correct incorrect');
    });
  }

  // if (CLJ.hologram_3_3.nRawScore == 1) {
  //   swiper3.slideTo(2, 0, true);

  //   if (CLV.oGlobal["exercise_11"] == 1) {
  //     pagination.eq(2).addClass('swiper-pagination-bullet-correct');
  //     slide.eq(2).addClass('correct');
  //   } else {
  //     pagination.eq(2).addClass('swiper-pagination-bullet-incorrect');
  //     slide.eq(2).addClass('incorrect');
  //   }
  // } else {
  //   $('.swiper-slide__content').each(function () {
  //     $(this).removeClass('correct incorrect');
  //   });
  // }

  if (CLV.oGlobal["activeStateDay3_1"] == 1) {
    stateTab.eq(0).removeClass('active').addClass('correct');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLV.oGlobal["activeStateDay3_1"] == 2) {
    stateTab.eq(0).removeClass('active').addClass('incorrect');
    stateTab.eq(1).removeClass('lock').addClass('active');
  } else if (CLJ.chapter_3_1.nRawScore == 1) {
    stateTab.eq(0).removeClass('active');
  } else if (CLJ.chapter_3_1.nRawScore == 0) {
    stateTab.eq(0).removeClass('correct incorrect').addClass('active');
    stateTab.eq(1).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(2).removeClass('correct incorrect').addClass('lock');
    stateTab.eq(3).removeClass('correct incorrect').addClass('lock');
  }

  if (CLV.oGlobal["activeStateDay3_2"] == 1) {
    stateTab.eq(1).removeClass('active').addClass('correct');
  } else if (CLV.oGlobal["activeStateDay3_2"] == 2) {
    stateTab.eq(1).removeClass('active').addClass('incorrect');
  } else if (CLJ.chapter_3_2.nRawScore == 1) {
    stateTab.eq(1).removeClass('active');
  }
}

function removeHalogram() {
  var currentImg = $('.swiper-slide-active:visible .halogram-img').attr('data-default');
  var proceedImg = 'user/images/hologram_pattern.png';

  setTimeout(function () {
    var src = (currentImg !== currentImg) ? currentImg : proceedImg;
    $('.swiper-slide-active:visible .halogram-img').attr("src", src);

    setTimeout(function () {
      src = (proceedImg === proceedImg) ? currentImg : proceedImg;
      $('.swiper-slide-active:visible .halogram-img').attr("src", src);
    }, 500)
  }, 100);
}

function removeHalogramHover() {

  $('.swiper-slide:visible .halogram-img').each(function () {
    setTimeout(function () {
      var currentImgHover = $('.swiper-slide-active:visible .halogram-img').attr('data-default');
      var hoverImg = $('.swiper-slide-active:visible .halogram-img').attr('data-src');

      $('.swiper-slide-active:visible .halogram-img').mouseenter(function () {
        $('.swiper-slide-active:visible .halogram-img').attr("src", hoverImg);
      });

      $('.swiper-slide-active:visible .halogram-img').mouseleave(function () {
        $('.swiper-slide-active:visible .halogram-img').attr("src", currentImgHover);
      });
    }, 100)
  });
}



function resetProgress() {
  CLJ.total.nRawScore = 0;

  // Итоговые практики по дням
  CLJ.failure_day_first.nRawScore = 0;
  CLJ.failure_day_second.nRawScore = 0;
  CLJ.failure_day_third.nRawScore = 0;

  // День 1
  CLJ.chapter_1_1.nRawScore = 0;
  CLJ.chapter_1_2.nRawScore = 0;
  CLJ.chapter_1_3.nRawScore = 0;
  CLJ.chapter_1_4.nRawScore = 0;
  CLJ.hologram_1_1.nRawScore = 0;
  CLJ.hologram_1_2.nRawScore = 0;

  // День 2
  CLJ.chapter_2_1.nRawScore = 0;
  CLJ.chapter_2_2.nRawScore = 0;
  CLJ.chapter_2_3.nRawScore = 0;
  CLJ.chapter_2_4.nRawScore = 0;
  CLJ.hologram_2_1.nRawScore = 0;
  CLJ.hologram_2_2.nRawScore = 0;
  CLJ.hologram_2_3.nRawScore = 0;
  CLJ.hologram_2_4.nRawScore = 0;
  CLJ.hologram_2_5.nRawScore = 0;
  CLJ.hologram_2_6.nRawScore = 0;

  // День 3
  CLJ.chapter_3_1.nRawScore = 0;
  CLJ.chapter_3_2.nRawScore = 0;
  CLJ.hologram_3_1.nRawScore = 0;
  CLJ.hologram_3_2.nRawScore = 0;
  CLJ.hologram_3_3.nRawScore = 0;

  // Прогресс по курсу
  CLJ.total_progress.nRawScore = 0;

  // Прогресс день 1
  CLJ.total_requirements.nRawScore = 0;

  // Прогресс день 2
  CLJ.total_alcohol.nRawScore = 0;

  // Прогресс день 3
  CLJ.total_activities.nRawScore = 0;


  CLJ.activeTabDay1.nRawScore = 0;
  CLJ.activeTabDay2.nRawScore = 0;
  CLJ.activeTabDay3.nRawScore = 0;

  CLV.oGlobal["exercise_1"] = 0;
  CLV.oGlobal["exercise_2"] = 0;
  CLV.oGlobal["exercise_3"] = 0;
  CLV.oGlobal["exercise_4"] = 0;
  CLV.oGlobal["exercise_5"] = 0;
  CLV.oGlobal["exercise_6"] = 0;
  CLV.oGlobal["exercise_7"] = 0;
  CLV.oGlobal["exercise_8"] = 0;
  CLV.oGlobal["exercise_9"] = 0;
  CLV.oGlobal["exercise_10"] = 0;
  CLV.oGlobal["exercise_11"] = 0;
  CLV.oGlobal["activeStateDay1_1"] = 0;
  CLV.oGlobal["activeStateDay1_2"] = 0;
  CLV.oGlobal["activeStateDay1_3"] = 0;
  CLV.oGlobal["activeStateDay1_4"] = 0;
  CLV.oGlobal["activeStateDay2_1"] = 0;
  CLV.oGlobal["activeStateDay2_2"] = 0;
  CLV.oGlobal["activeStateDay2_3"] = 0;
  CLV.oGlobal["activeStateDay2_4"] = 0;
  CLV.oGlobal["activeStateDay3_1"] = 0;
  CLV.oGlobal["activeStateDay3_2"] = 0;
  CLV.oGlobal["course_data"] = '';
  CLV.oGlobal["tablet_first_data"] = '';
  CLV.oGlobal["tablet_second_data"] = '';
  CLV.oGlobal["tablet_third_data"] = '';
  CLV.oGlobal["tablet_fourth_data"] = '';


  EventBus.$emit("reset-dialog-day-0");
  EventBus.$emit("reset-dialog-day-1");
  EventBus.$emit("reset-dialog-day-2");
  EventBus.$emit("reset-dialog-day-3");
  EventBus.$emit("clear-data");

  gotoFrame('FRAME_5', event);
}