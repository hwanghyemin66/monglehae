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
var swiper = new Swiper('.cafeswiper', {
            pagination: {
                el: '.cafe-pag',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.cafe-next',
                prevEl: '.cafe-prev',
            },
        });


//dot
const dot = document.querySelector(".dot");
const menus = document.querySelectorAll("#bar a");

// 각 메뉴의 dot 위치
const positions = [
    "30px",   // 카페
    "120px",  // 놀이시설
    "210px",  // 포토존
    "296px",  // 증정품
    "390px",  // 펫샤워룸
    "495px",  // 펫드라이룸
    "605px"   // 어메니티
];

menus.forEach((menu, index) => {
    menu.addEventListener("mouseenter", () => {
        dot.style.left = positions[index];
    });

    menu.addEventListener("mouseleave", () => {
        dot.style.left = positions[0]; // 카페 위치로 복귀
    });
});

//빈 a태그 올라가지 않게 하기
const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});