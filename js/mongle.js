const header = document.querySelector("#header");
const banner = document.querySelector("#main_banner"); // 메인 배너 영역

window.addEventListener("scroll", () => {
    const bannerHeight = banner.offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


//rooms 스와이퍼
 var swiper = new Swiper(".rooms_swiper", {
            slidesPerView: 3,
            spaceBetween: 60,
            centeredSlides: true,

            navigation: {
                nextEl: ".rooms_next",
                prevEl: ".rooms_prev",
            },

            loop: true,
        });

//tour 스와이퍼
 var swiper = new Swiper(".tour_swiper", {
            slidesPerView: 5,
            spaceBetween: 50,
            centeredSlides: true,

            navigation: {
                nextEl: ".tour_next",
                prevEl: ".tour_prev",
            },

            loop: true,
        });

//aos
 AOS.init({
            duration: 1000,
        });


//선 애니메이션
const information = document.querySelector("#special");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        information.classList.add("active");
    }
}, {
    threshold: 0.2
});

observer.observe(information);


//빈 a태그 올라가지 않게 하기
const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});