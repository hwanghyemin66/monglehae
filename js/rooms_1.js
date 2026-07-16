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

//aos 
AOS.init({
            duration: 1500,
        });

//dogroom 스와이퍼

var swiper = new Swiper(".dogroom_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dogroom-pag",
    clickable: true,
  },
  navigation: {
    nextEl: ".dogroom-next",
    prevEl: ".dogroom-prev",
  },
});


//rooms view
var swiper = new Swiper('.view_swiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.view_swiper2', {
  loop: true,
  navigation: {
    nextEl: '.view-next',
    prevEl: '.view-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});


//special point line
const information = document.querySelector("#special_point");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        information.classList.add("active");
    }
}, {
    threshold: 0.2
});

observer.observe(information);


//dot 이동
const dot = document.querySelector(".dot");

const all = document.querySelector(".bar_bold_text");
const dog = document.querySelector(".bar_dog_room");
const cat = document.querySelector(".bar_cat_room");

// 객실 전체 보기
all.addEventListener("mouseenter", () => {
    dot.style.left = "63px";
});

// 멍멍룸
dog.addEventListener("mouseenter", () => {
    dot.style.left = "175px";
});
dog.addEventListener("mouseleave", () => {
    dot.style.left = "63px";
});

// 냥냥룸
cat.addEventListener("mouseenter", () => {
    dot.style.left = "260px";
});
cat.addEventListener("mouseleave", () => {
    dot.style.left = "63px";
});


//빈 a태그 올라가지 않게 하기
const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});