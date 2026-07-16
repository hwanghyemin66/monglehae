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



/* ------------------------------
    프롤로그 > 수영하는 캐릭터 호버
-------------------------------- */

const dogcat = document.querySelector(".dogcat");
const obstacles = document.querySelectorAll(".obstacle");
const ocean = document.querySelector(".ocean_wrap");

let active = false;

/* quickTo 추가 */
const xTo = gsap.quickTo(dogcat, "x", {
    duration: 0.12,
    ease: "power3.out"
});

const yTo = gsap.quickTo(dogcat, "y", {
    duration: 0.12,
    ease: "power3.out"
});


/* 텍스트 둥둥 */
gsap.to(".main_text", {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


/* 공, 튜브 둥둥 */
gsap.utils.toArray(".float").forEach(item => {

    gsap.to(item, {
        y: "+=15",
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});


/* 바다 영역 들어오면 활성화 */
ocean.addEventListener("mouseenter", () => {
    active = true;
});


/* 바다 영역 나가면 원위치 */
ocean.addEventListener("mouseleave", () => {

    active = false;

    gsap.to(dogcat, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });

});


/* 마우스 따라다니기 */
ocean.addEventListener("mousemove", (e) => {

    if (!active) return;

    const rect = ocean.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    xTo(x - rect.width / 2);
    yTo(y - rect.height / 2);

    checkCollision();

});


/* 충돌 체크 */
function checkCollision() {

    const dogRect = dogcat.getBoundingClientRect();

    obstacles.forEach(item => {

        const objRect = item.getBoundingClientRect();

        if (
            dogRect.left < objRect.right &&
            dogRect.right > objRect.left &&
            dogRect.top < objRect.bottom &&
            dogRect.bottom > objRect.top
        ) {

            const angle = Math.random() * Math.PI * 2;

            gsap.to(item, {
                x: `+=${Math.cos(angle) * 80}`,
                y: `+=${Math.sin(angle) * 80}`,
                rotation: `+=${gsap.utils.random(-40, 40)}`,
                duration: 0.8,
                ease: "back.out(1.7)"
            });

        }

    });

}

/* 배너 스와이퍼 */
var swiper = new Swiper(".mb_swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".mb_pag",
        clickable: true,
    },
    navigation: {
        nextEl: ".mb_next",
        prevEl: ".mb_prev",
    },
    loop: true,
});



/* 포토 스와이퍼 */
var swiper = new Swiper(".photo_swiper_thumbs", {
    spaceBetween: 10,
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,

     slidesPerGroup: 4,
     
    watchSlidesProgress: true, navigation: {
        nextEl: ".photo_next",
        prevEl: ".photo_prev",
    },
    pagination: {
        el: ".photo_pag",
    },
});
var swiper2 = new Swiper(".photo_swiper", {
    

    thumbs: {
        swiper: swiper,
    },
});



document.querySelectorAll(".accordion-title").forEach(title => {

    title.addEventListener("click", () => {

        const item = title.parentElement;
        const content = item.querySelector(".accordion-content");

        if (item.classList.contains("active")) {

            content.style.maxHeight = "0px";
            item.classList.remove("active");

        } else {

            content.style.maxHeight = content.scrollHeight + 100 + "px";
            item.classList.add("active");

        }

    });

});


/* 몽글몽글기념품 타이틀 옆 애니메이션 */
const lineAnimation = document.querySelector(".line_animation");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        lineAnimation.classList.add("active");
    }
}, {
    threshold: 0.3
});

observer.observe(lineAnimation);


//빈 a태그 올라가지 않게 하기
const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});