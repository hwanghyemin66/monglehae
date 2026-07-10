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