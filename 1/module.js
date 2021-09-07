// Add script to head
function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

function addStyle(href) {
  var style = document.createElement("link");
  style.href = href;
  style.type = "text/css";
  style.rel = "stylesheet";
  document.head.appendChild(style);
}

addScript('./user/js/vue.js');
// addScript('./user/js/vue.min.js');
addScript('./user/js/jquery.min.js');
addScript('./user/js/jquery-ui.min.js');
addScript('./user/js/jquery.ui.touch-punch.min.js');
addScript('./user/js/baron.min.js');
addScript('./user/js/swiper.min.js');
addScript('./user/js/main.js');
addScript('./user/js/materialize.min.js');
addScript('./user/js/gsap.min.js');
addScript('./user/js/ScrollTrigger.min.js');
addScript('./user/js/gsapSlide1.js');
addScript('./user/js/tabletDay0.js');
addScript('./user/js/tablet.js');
addScript('./user/js/tabletDay2.js');
addScript('./user/js/tabletDay3.js');
addScript('./user/js/scalize.min.js');
addStyle('./user/css/animate.min.css');
addStyle('./user/css/main.css');


(function(ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;
      if (!this.parentElement) {return null}
      else return this.parentElement.closest(selector)
    };
}(Element.prototype));

// InitModule
function InitModule() {
  $(window).resize(function () {
    commonProgress();
    change_viewport();
    setTimeout(setTextTails, 200);

  });
  $(document).ready(function () {
    windowSize();
    change_viewport();
    setTimeout(setTextTails, 200);

  });

  jQuery(document).ready(function () {
    $('.tabs').tabs();
    if ("devicePixelRatio" in window && window.devicePixelRatio == 2) {
      var img_to_replace = jQuery("img.replace-2x").get();

      for (var i = 0, l = img_to_replace.length; i < l; i++) {
        var src = img_to_replace[i].src;
        src = src.replace(/\.(png|jpg|gif)+$/i, "@2x.$1");
        img_to_replace[i].src = src;
      }
    }
  });

  $("body").on(
    "click",
    ".js-next, .js-prev, .lmm-header-icon-menu, .lmm-menu__nav-link, .lmm-menu__nav-sublink",
    function () {
      setTimeout(function () {
        setTimeout(setTextTails, 200);
        progressBar();
      }, 100);
    }
  );

  $("body").on("click touch", ".js-next", function () {
    $("#next img").click();
    progressBar();
    modulNames();
  });
  $("body").on("click touch", ".js-prev", function () {
    $("#prev img").click();
    progressBar();
    modulNames();
  });

  $("body").on("click touch", ".women-progress", function () {
    commonProgressRequirements();
    commonProgressAlcohol();
    commonProgressActivities();
  });

  $("body").on("click touch", ".header-icon-menu", function () {
    $("#p_player").addClass("outherHeight");
    $("#p_player").css("z-index", "100000");
    EventBus.$emit("open-menu");
  });
  $("body").on("click touch", ".lmm-menu__header-close", function () {
    $("#p_player").removeClass("outherHeight");
    $("#p_player").css("z-index", "100");
    EventBus.$emit("close-menu");
  });

  $("body").on("click touch", ".restart_task", function () {
    EventBus.$emit("reset-assessment");
    $(".header-icon-menu").addClass("disabled");
    $(this).parents(":eq(3)").fadeOut(300);
    $(".lmm-feedback").hide();
    $(".lmm-info").show();
  });

}

// ShutdownModule
function ShutdownModule() {}


function setTextTails() {
  $('.triangle').each(function () {
      $(this).css('border-bottom-width', $(this).parent().outerHeight());
  })

  $('.triangle__top').each(function () {
      $(this).css('border-left-width', $(this).parent().outerWidth());
  })

  $('.triangle__bottom').each(function () {
      $(this).css('border-right-width', $(this).parent().outerWidth());
  })

  $('.triangle__left').each(function () {
      $(this).css('border-top-width', $(this).parent().outerHeight());
  })

  $('.triangle__right').each(function () {
      $(this).css('border-top-width', $(this).parent().outerHeight());
  })
}


function scalize() {
  $('.scalize').scalize({
      styleSelector: 'circle',
  });
}

