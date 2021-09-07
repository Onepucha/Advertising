gsap.registerPlugin(ScrollTrigger)

function gsapAnim() {
    gsap.from(".item--1 .rect", {
        delay: 0,
        opacity: 0,
        duration: 1,
        y: -100,
        ease: Expo.easeInOut,
    })

    gsap.from(".item--1 .panel", {
        delay: 0,
        opacity: 0,
        duration: 1,
        x: 100,
        ease: Expo.easeInOut,
    })

    gsap.from(".item--2 .rect", {
        delay: 0,
        opacity: 0,
        x: -100,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".item--1",
            start: "top top",
            end: "bottom center",
            scrub: 2,
        }
    })

    gsap.from(".item--2 .panel", {
        delay: 0,
        opacity: 0,
        x: 100,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".item--1",
            start: "top top",
            end: "bottom center",
            scrub: 2,
        }
    })

    gsap.from(".item--3 .rect", {
        delay: 0,
        opacity: 0,
        x: -100,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".item--2",
            start: "top top",
            end: "bottom center",
            scrub: 2,
        }
    })

    gsap.from(".item--3 .panel", {
        delay: 0,
        opacity: 0,
        x: 100,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".item--2",
            start: "top top",
            end: "bottom center",
            scrub: 2,
        }
    })

    gsap.from(".item--1 .rellax", {
        x: -130,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".x-container",
            start: "top bottom", // position of trigger meets the scroller position
            end: "bottom top",
            scrub: true,
        }
    });

    gsap.from(".item--2 .rellax", {
        x: 130,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".x-container",
            start: "top bottom", // position of trigger meets the scroller position
            end: "bottom top",
            scrub: true,
        }
    });

    gsap.from(".item--3 .rellax", {
        x: -130,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: ".x-container",
            start: "top bottom", // position of trigger meets the scroller position
            end: "bottom top",
            scrub: true,
        }
    });

    gsap.from('.item--4 .rellax', {
        y: "-200",
        delay: 0.5,
        opacity: 0,
        ease: Power1.easeOut,
        scrollTrigger: {
            scroller: ".gsap",
            trigger: '.item--3',
            scrub: true,
            // markers: true,
            start: "top center",
            end: "bottom 400px",
            onLeave: function(){ animationWomenSleep() },
            onEnterBack: function(){ removeAnimationWomenSleep()},
        },
    })

    function animationWomenSleep() {
        setTimeout(function(){
            document.getElementById('tst').src = "user/images/panel_1_4_2.png";
            setTimeout(function () {
                document.getElementById('tst').src = "user/images/panel_1_4_3.png";
            }, 400);
        }, 500)

    };

    function removeAnimationWomenSleep() {
        setTimeout(function(){
            document.getElementById('tst').src = "user/images/panel_1_4_2.png";
            setTimeout(function () {
                document.getElementById('tst').src = "user/images/panel_1_4_1.png";
            }, 400);
        }, 500)
    };

}