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



//dot
const dot = document.querySelector(".dot");
const menus = document.querySelectorAll("#bar a");

const positions = [
    "45px",   // 공지사항
    "145px",  // 이용후기
    "240px"   // 여행지
];

menus.forEach((menu, index) => {
    menu.addEventListener("mouseenter", () => {
        dot.style.left = positions[index];
    });

    menu.addEventListener("mouseleave", () => {
        dot.style.left = positions[1];
    });
});