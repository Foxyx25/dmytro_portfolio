let menu = document.querySelector(".fixed-menu");

menu.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeBtn = document.querySelector(".active")

    console.log(clickTarget)
    if (clickTarget.classList.contains("nav-link")) {
        activeBtn.classList.remove("active");
        clickTarget.classList.add("active")

        console.log(clickTarget)
        let mobile = document.querySelector(".mobile-menu");
        if (!mobile.classList.contains("hide")){
            mobile.classList.add("hide");
        }
    }

    let body = document.querySelector("body");
    let mobileMenu = document.querySelector(".mobile-menu");
    if (!mobileMenu.classList.contains("hide")){
        body.classList.add("off-scroll");
    }
    else{
        body.classList.remove("off-scroll");
    }
})
let classLink = ".main-link";

window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*3.8 ) {
        classLink = ".comments-link";
    }
    else if (window.scrollY >= h*2.8) {
        classLink = ".works-link";
    }
    else if (window.scrollY >= h*1.8) {
        classLink = ".skills-link";
    }
    else if (window.scrollY >= h*0.8) {
        classLink = ".about-link";
    }
    else {
        classLink = ".main-link";
    }
    let activeBtn = document.querySelector(".active");
    let newActiveBtn = document.querySelector(classLink);

    if (!newActiveBtn.classList.contains("active")) {
        newActiveBtn.classList.add("active");
        activeBtn.classList.remove("active")
    }
}
document.querySelector(".mobile-button").addEventListener("click", function(event) {
    document.querySelector(".mobile-menu").classList.toggle("hide");
});