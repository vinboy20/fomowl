(function () {
    "use strict";


    /**
   * Animation on scroll function and init
   */
    function aosInit() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);

    /**
   * Gallery Slider
   */
    new Swiper('.mySwiper', {
        speed: 400,
        loop: true,
        spaceBetween: 2,
        centeredSlides: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: false
        // },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 5
            }
        }
    });


    /*------------------
         Preloader
     --------------------*/
    $(window).on('load', function () {
        // $(".loader").fadeOut();
        $("#preloader-active").delay(200).fadeOut("slow");
    });
    // Page loading
    //  $(window).on("load", function () {
    //     $("#preloader-active").delay(450).fadeOut("slow");

    // });

})()


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Function to toggle the menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the event from propagating to the document
        mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    });

    // Function to hide the menu when clicking outside
    document.addEventListener("click", (e) => {
        if (
            mobileMenu.style.display === "block" &&
            !mobileMenu.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            mobileMenu.style.display = "none";
        }
    });
});