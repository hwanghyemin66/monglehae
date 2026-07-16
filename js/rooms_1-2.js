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
            duration: 1000,
        });

//스와이퍼
var swiper = new Swiper('.other-rooms-swiper', {
            slidesPerView: 3,
            spaceBetween: 31,
            navigation: {
                nextEl: '.other-rooms-next',
                prevEl: '.other-rooms-prev',
            },
        });







//dot 이동
const dot = document.querySelector(".dot");
const menus = document.querySelectorAll("#bar a");

// 각 메뉴 위에 점이 위치할 left 값
const positions = [
    "45px",   // 멍멍A룸
    "140px",  // 멍멍B룸
    "240px",  // 멍멍C룸
    "340px",  // 냥냥A룸
    "430px",  // 냥냥B룸
    "530px"   // 냥냥C룸
];

menus.forEach((menu, index) => {
    menu.addEventListener("mouseenter", () => {
        dot.style.left = positions[index];
    });

    menu.addEventListener("mouseleave", () => {
        dot.style.left = positions[0]; // 다시 멍멍A룸 위치로
    });
});



//빈 a태그 올라가지 않게 하기
const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});